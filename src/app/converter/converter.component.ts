import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl } from "@angular/forms";
import { IRates } from '../models/Response';
import { ArrayService } from '../array.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {
  //initial variable assignments
  FromSymbol: string = 'EUR';
  ToSigns = ['$', 'AU$', 'CA$', 'zł', 'Mex$']
  //variable initialisations 
  ToSymbol = {};
  ToSymbols = [];
  ToSign: string;
  newForm: FormGroup;
  Response: IRates;
  AllRates: object;
  chosenRate: object;
  stringChosenRate: string;
  numberChosenRate: number;
  MultipliedRate: number;
  ResultString: string;
  RateString: string;
  TodaysDate: string;

  constructor(public dataService: DataService, public arrayService: ArrayService ) { }

  //gets currency symbols from the service ArrayService
  get SymbolsArray() { 
    return this.arrayService.ToSymbols;
 } 
  ngOnInit(): void {
    //initialises form groups
    this.newForm = new FormGroup({
      amount: new FormControl(),
      from: new FormControl(),
      to: new FormControl()
    });

    //stores the currency symbols from the ArrayService for use in the html
    this.ToSymbols = this.arrayService.ToSymbols;

    //hitting out to my API and storing the response as an object
    this.dataService.MakeRequest().subscribe(requestItems => {
      this.Response = requestItems;
      // console.log(this.Response);
      this.AllRates = this.Response.rates;
     // console.log(this.AllRates);
    });
  }


  SetValues() {
    //stores three values in  variables based on what was selected/inputted into the form
    let from = this.newForm.controls["from"].value;
    let to = this.newForm.controls["to"].value;
    let amount = this.newForm.controls["amount"].value;
    // console.log(from, to, amount);

    //stores the rate for the currency you have decided to convert into (from EURO) as an object
    this.chosenRate = this.AllRates[to];
    //convert the chosenRate from an object to a string
    this.stringChosenRate = JSON.stringify(this.chosenRate);
    //convert the chosenRate from a string to a Float for use in calculations
    this.numberChosenRate = parseFloat(this.stringChosenRate);
    //multiply the amount inputted by the rate gotten from the API
    this.MultipliedRate = (amount * this.numberChosenRate);
    //displays the rate and the result 
    this.ResultString = "Result = ";
    this.RateString = "Rate = "

    //checks which currency has been chosen to convert into and displays the corresponding sign in the results
    if (to == 'USD') {
      this.ToSign = this.ToSigns[0];
    }
    else if (to == 'AUD') {
      this.ToSign = this.ToSigns[1];
    }
    else if (to == 'CAD') {
      this.ToSign = this.ToSigns[2];
    }
    else if (to == 'PLN') {
      this.ToSign = this.ToSigns[3];
    }
    else if (to == 'MXN') {
      this.ToSign = this.ToSigns[4];
    }
  }
}
