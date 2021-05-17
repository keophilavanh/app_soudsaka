import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {APIService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class OrderService extends APIService {
  public url: string = this.getBaseUrl();
  public token = '';



  orderlistByTable(param:any):Observable<any> {
    const header = this.headerBase('orderlistByTable');
    return this.http.post(this.url + '/order.api.php', param,{headers:header});
  }

  updatecategory(param:any):Observable<any> {
    const header = this.headerBase('updatecategory');
    return this.http.post(this.url + '/category.api.php', param,{headers:header});
  }

  cash(param:any):Observable<any> {
    const header = this.headerBase('deletecategory');
    return this.http.post(this.url + '/category.api.php', param,{headers:header});
  }

  

 
}