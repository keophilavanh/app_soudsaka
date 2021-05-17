import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/service/report.service';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {ReportPage} from '../report/report.page'

@Component({
  selector: 'app-report-select',
  templateUrl: './report-select.page.html',
  styleUrls: ['./report-select.page.scss'],
})
export class ReportSelectPage implements OnInit {

  public report:number;
  
  public date_start:string;
  public date_end:string;
  constructor(
    private reportService:ReportService,
    public loadingCtrl: LoadingController,
    private modalController:ModalController
  ) { }

  ngOnInit() {
  }


  report_view(){
    console.log(this.report);
    if(!this.date_start || !this.date_end){
      console.log(this.date_start);
      console.log(this.date_end);
      return
    }

    if(this.report == 1){
      this.report_order()
    }else if(this.report == 2){
      this.report_order_detell()
    }else{

    }
   
    
  }


  async report_order(){
   
    const Data = {
      first_date: this.date_start.split('T')[0],
      last_date: this.date_end.split('T')[0]
    }
    console.log(Data);

 

    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
     
    });
    loader.present();
    
    
    this.reportService.report_ordder(Data).subscribe(
      res=>{
        console.log(res);
        this.view_report(res)
        loader.dismiss();
      },
      err=>{
        console.log(err);
        loader.dismiss();
      }
    )
    
  }

  async report_order_detell(){
   
    const Data = {
      first_date: this.date_start.split('T')[0],
      last_date: this.date_end.split('T')[0]
    }
    console.log(Data);

 

    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
     
    });
    loader.present();
    
    
    this.reportService.report_order_detell(Data).subscribe(
      res=>{
        console.log(res);
        this.view_report(res)
        loader.dismiss();
      },
      err=>{
        console.log(err);
        loader.dismiss();
      }
    )
    
  }

  async view_report(data:any) {
    const modal = await this.modalController.create({
      component: ReportPage,
      cssClass: 'my-custom-class',
      componentProps: {
        data: data,
        report: this.report,
        date_start:this.date_start.split('T')[0],
        date_end:this.date_end.split('T')[0]
       
      }
    });

    modal.onDidDismiss().then(
      res=>{
       
        
      }
    )
    
    return await modal.present();
  }


}
