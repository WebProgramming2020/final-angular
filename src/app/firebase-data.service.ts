import { Injectable, Input } from '@angular/core';
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { AngularFirestoreCollection, AngularFirestore} from "@angular/fire/firestore";
import { IData } from './idata';


@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {

  conversionsDataCollection:AngularFirestoreCollection<IData>;

  conversionData:Observable<IData[]>;

  allConversionsData:IData[];

  errorMessage:string;

  constructor(private _http:HttpClient, private _afs:AngularFirestore) { 
    this.conversionsDataCollection = _afs.collection<IData>("conversion_data");
  }

  //gets previously stored rates from the NoSql database
  getConverisonData(): Observable<IData[]> {
    this.conversionData = this.conversionsDataCollection.valueChanges();
    this.conversionData.subscribe(data => console.log("getConversionData:" + JSON.stringify(data)));
    return this.conversionData;
  }

  //adds conversion rates to the the NoSql database
  addConversionData(data: IData): void {
    this.conversionsDataCollection.add(JSON.parse(JSON.stringify(data)));
  }

  private handleError(err: HttpErrorResponse) {
    console.log('ConversionApiService: ' + err.message);
    return Observable.throw(err.message);
  }
}
