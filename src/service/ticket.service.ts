import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {APIService} from "./api.service";
@Injectable({
  providedIn: 'root'
})
export class TicketService extends APIService {
  public url: string = this.getBaseUrl();
  public token = '';


  getorderByTable(param:any):Observable<any> {
    const header = this.headerBase('getorderByTable');
    return this.http.post(this.url + '/order.api.php', param,{headers:header});
  }



  updateorder(param:any):Observable<any> {
    const header = this.headerBase('updateorder');
    return this.http.post(this.url + '/order.api.php', param,{headers:header});
  }


  addorder(param:any):Observable<any> {
    const header = this.headerBase('addorder');
    return this.http.post(this.url + '/order.api.php', param,{headers:header});
  }


  getticketById(param:any):Observable<any> {
    const header = this.headerBase('getorder');
    return this.http.post(this.url + '/order.api.php', param,{headers:header});
  }

  payment(param:any):Observable<any> {
    const header = this.headerBase('payment');
    return this.http.post(this.url + '/order.api.php', param,{headers:header});
  }
}

