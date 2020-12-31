import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class HoldingsService {
  holdingsUrl = '../assets/ARKK_HOLDINGS.json';

  constructor(private http: HttpClient) {}
  // TODO: once API is implemented change all functions
  public getHoldings() {
    return this.http.get<Holding[]>(this.holdingsUrl)
  }
}

export class Holding {
  public fund: any;
  public name: any;
  public ticker: any;
  public cusip: any;
  public shares: any;
  public value: any;
  public weight: any;
}