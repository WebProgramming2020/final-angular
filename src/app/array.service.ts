import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {

  ToSymbols = ['USD', 'AUD', 'CAD', 'PLN', 'MXN'];

  constructor() { }
}
