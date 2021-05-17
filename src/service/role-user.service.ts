import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {APIService} from "./api.service";
@Injectable({
  providedIn: 'root'
})
export class RoleUserService extends APIService {
  public url: string = this.getBaseUrl();
  public token = '';


  addrole(param:any):Observable<any> {
    const header = this.headerBase('addrole');
    return this.http.post(this.url + '/role.api.php', param,{headers:header});
  }
  updaterole(param:any):Observable<any> {
    const header = this.headerBase('updateuser');
    return this.http.post(this.url + '/role.api.php', param,{headers:header});
  }
  deleterole(param:any):Observable<any> {
    const header = this.headerBase('deleterole');
    return this.http.post(this.url + '/role.api.php', param,{headers:header});
  }
  rolelist(param:any):Observable<any> {
    const header = this.headerBase('rolelist');
    return this.http.post(this.url + '/role.api.php', param,{headers:header});
  }
}
