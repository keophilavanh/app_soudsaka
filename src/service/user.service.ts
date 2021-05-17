import { Injectable } from '@angular/core';
import {APIService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends APIService {

  public params: any = {};
  private url: string = this.getBaseUrl();
  public token = '';
  
  adduser(param:any):Observable<any> {
    const header = this.headerBase('adduser');
    return this.http.post(this.url + 'user.api.php', param,{headers:header});
  }

  updateuser(param:any):Observable<any> {
    const header = this.headerBase('updateuser');
    return this.http.post(this.url + 'user.api.php', param,{headers:header});
  }

  deleteuser(param:any):Observable<any> {
    const header = this.headerBase('deleteuser');
    return this.http.post(this.url + 'user.api.php', param,{headers:header});
  }

  changepassword(param:any):Observable<any> {
    const header = this.headerBase('changepassword');
    return this.http.post(this.url + 'user.api.php', param,{headers:header});
  }

  resetpassword(param:any):Observable<any> {
    const header = this.headerBase('resetpassword');
    return this.http.post(this.url + 'user.api.php', param,{headers:header});
  }
  userlist(param:any):Observable<any> {
    const header = this.headerBase('userlist');
    return this.http.post(this.url + 'user.api.php', param,{headers:header});
  }
  getuser(param:any):Observable<any> {
    const header = this.headerBase('getuser');
    return this.http.post(this.url + '/user.api.php', param,{headers:header});
  }


}
