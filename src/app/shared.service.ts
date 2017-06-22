import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SharedService {
  conversionUrl = 'http://localhost:8010/convert';
  conversionTypeUrl = '?conversionType='
  conversionInputUrl = '&input=';
  totReqsMade = 0;

  constructor(private _http: Http) { }

  convertValue(conversionType, conversionValue) {
     return this._http.get(this.conversionUrl + this.conversionTypeUrl + conversionType + this.conversionInputUrl + conversionValue)
            .map(response => {
                { return response.toString() };
            })
            .catch(error => Observable.throw(error.toString()));
  }

}
