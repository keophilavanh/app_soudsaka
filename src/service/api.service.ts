import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class APIService {

  constructor(public http: HttpClient) { }

   
  protected getBaseUrl(): string {
   
  
     return 'http://localhost/soudsaka/api/';
    //  return 'http://192.168.10.104/restaurant/api/';
  
  }

  protected headerBase(m:string=""): any {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'})
    .set('token', token+'')
    .set('m', m)
    .set('database_name','tax_pks')
    ;
    return headers;
  }
}
