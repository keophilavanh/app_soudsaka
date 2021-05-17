import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {APIService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends APIService {
  public url: string = this.getBaseUrl();
  public token = '';



  addcategory(param:any):Observable<any> {
    const header = this.headerBase('addcategory');
    return this.http.post(this.url + '/category.api.php', param,{headers:header});
  }

  updatecategory(param:any):Observable<any> {
    const header = this.headerBase('updatecategory');
    return this.http.post(this.url + '/category.api.php', param,{headers:header});
  }

  deletecategory(param:any):Observable<any> {
    const header = this.headerBase('deletecategory');
    return this.http.post(this.url + '/category.api.php', param,{headers:header});
  }

  categorylist(param:any):Observable<any> {
    const header = this.headerBase('categorylist');
    return this.http.post(this.url + '/category.api.php', param,{headers:header});
  }

  getcategory(param:any):Observable<any> {
    const header = this.headerBase('getcategory');
    return this.http.post(this.url + '/category.api.php', param,{headers:header});
  }

  getcategory_menu(param:any):Observable<any> {
    const header = this.headerBase('categoryparent');
    return this.http.post(this.url + '/category.api.php', param,{headers:header});
  }


 
}

