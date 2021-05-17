import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {APIService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ReportService  extends APIService {
  public url: string = this.getBaseUrl();
  public token = '';



  user_report_by_date(param:any):Observable<any> {
    const header = this.headerBase('report_ticket_myself');
    return this.http.post(this.url + 'report.api.php', param,{headers:header});
  }


  report_ordder(param:any):Observable<any> {
    const header = this.headerBase('reportReceives');
    return this.http.post(this.url + 'report.api.php', param,{headers:header});
  }

  report_order_detell(param:any):Observable<any> {
    const header = this.headerBase('reportOrder');
    return this.http.post(this.url + 'report.api.php', param,{headers:header});
  }



}
