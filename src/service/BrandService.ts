import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {APIService } from "./api.service";
import {HttpParams } from '@angular/common/http';


@Injectable()
export class BrandService extends APIService {

    public params: any = {};
    private url: string = this.getBaseUrl();
    public token = '';

    public getUrl(){
        return this.url;
    }

    public sen_file(params): Observable<any> {

       

        return this.http.post(this.url + '/Finance_in/clear_sen_Finance_in', params,{headers: this.headerBase()});
    }

   


}