import { Injectable, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IRates } from './models/Response';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  //got from documentation but not needed, is passed in string format below
  endpoint = "latest";
  access_key = "2d3a0c2a8468b134d45b1b31192a8ea2";
  ratesUrl = "http://data.fixer.io/api/";
  ToSymbols = ['USD', 'AUD', 'CAD', 'PLN', 'MXN']; 

 /*  gets latest conversion rates
  passes url access key and the lettering for the currencies you would like to convert into
  I based my IRates interface model based on the values I needed based on the values
   I needed as opposed to basing it on the entire json response */
  MakeRequest(){
    return this._http.get<IRates>(this.ratesUrl + "latest?access_key=" + this.access_key + "&symbols=" + this.ToSymbols);
  }
}
