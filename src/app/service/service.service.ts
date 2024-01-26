import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  baseUrl = 'http://localhost:3000/chartdata';
  constructor(private _http : HttpClient) {}

  showData(){
    return this._http.get(this.baseUrl);
  }
}
