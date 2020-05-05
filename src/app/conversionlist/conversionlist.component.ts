import { Component, OnInit, Input } from '@angular/core';
import { FirebaseDataService } from '../firebase-data.service';
import { IData, Data } from '../idata';
import { ArrayService } from '../array.service';
import { FormGroup, FormControl } from "@angular/forms";
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-conversionlist',
  templateUrl: './conversionlist.component.html',
  styleUrls: ['./conversionlist.component.css'],
  providers: [FirebaseDataService],
})
export class ConversionlistComponent implements OnInit {

  //variable initiliation
  show: boolean = false;
  TodaysDate: string;
  ToSymbols = [];
  conversionData: IData[];
  newForm: FormGroup;

  //constructor
  constructor(private _conversionAPIService: FirebaseDataService, public arrayService: ArrayService) { }

  //gets the array of Symbols for different currencies using the ArrayService
  get SymbolsArray() {
    return this.arrayService.ToSymbols;
  }

  ngOnInit() {
    this.newForm = new FormGroup({
      amount: new FormControl(),
      from: new FormControl(),
      to: new FormControl()
    });
    //populates database rows on page
    this._conversionAPIService.getConverisonData().subscribe(conversionData => { this.conversionData = conversionData });
    //stores symbols for use in html
    this.ToSymbols = this.arrayService.ToSymbols;
    //non-deterministic function, always returns the current date
    this.TodaysDate = formatDate(new Date(), 'yyyy/MM/dd', 'en');
  }
  
  //adds the chosen conversion into the database. Opportunity for errors of input
  addTheConversion(currency: string, rate: string, date: string): boolean {
    let tempConversion: IData;
    tempConversion = new Data(currency, rate, date);
    this._conversionAPIService.addConversionData(tempConversion);
    return false;
  }
}