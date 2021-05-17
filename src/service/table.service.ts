import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {APIService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class TableService extends APIService {
  public url: string = this.getBaseUrl();
  public token = '';



  list_table(param:any):Observable<any> {
    const header = this.headerBase('tablelist');
    return this.http.post(this.url + '/table.api.php', param,{headers:header});
  }



  add_table(param:any):Observable<any> {
    const header = this.headerBase('addtable');
    return this.http.post(this.url + '/table.api.php', param,{headers:header});
  }

  edit_table(param:any):Observable<any> {
    const header = this.headerBase('updatetable');
    return this.http.post(this.url + '/table.api.php', param,{headers:header});
  }

  delete_table(param:any):Observable<any> {
    const header = this.headerBase('deletetable');
    return this.http.post(this.url + '/table.api.php', param,{headers:header});
  }

  get_table(param:any):Observable<any> {
    const header = this.headerBase('gettable');
    return this.http.post(this.url + '/table.api.php', param,{headers:header});
  }


}