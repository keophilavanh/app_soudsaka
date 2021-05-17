import { Injectable } from '@angular/core';
import {APIService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService extends APIService {

  public params: any = {};
  private url: string = this.getBaseUrl();
  public token = '';
  
  addfood(param:any):Observable<any> {
    const header = this.headerBase('addfood');
    return this.http.post(this.url + '/food.api.php', param,{headers:header});
  }
  updatefood(param:any):Observable<any> {
    const header = this.headerBase('updatefood');
    return this.http.post(this.url + '/food.api.php', param,{headers:header});
  }
  deletefood(param:any):Observable<any> {
    const header = this.headerBase('deletefood');
    return this.http.post(this.url + '/food.api.php', param,{headers:header});
  }  
  foodlist(param:any):Observable<any> {
    const header = this.headerBase('foodlist');
    return this.http.post(this.url + '/food.api.php', param,{headers:header});
  }
  getfood(param:any):Observable<any> {
    const header = this.headerBase('getfood');
    return this.http.post(this.url + '/food.api.php', param,{headers:header});
  }


}