import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { TableAddPage } from '../table-add/table-add.page';
import { TableInfoPage } from '../table-info/table-info.page';
import {TableService} from "src/service/table.service"
@Component({
  selector: 'app-table-manage',
  templateUrl: './table-manage.page.html',
  styleUrls: ['./table-manage.page.scss'],
})
export class TableManagePage implements OnInit {

  
  public page:number=1
  public limit : number=10
  public keyword: string

  public table_list:Array<any> = [];

  constructor(private modalController:ModalController,private route:Router,public loadingCtrl: LoadingController,private table:TableService) { }

  ngOnInit() {
    this.loadTable()
  }

  async add_table() {
    const modal = await this.modalController.create({
      component: TableAddPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'titel': 'Add Table',
        'status': 0
       
      }
    });

    modal.onDidDismiss().then(
      res=>{
        console.log(res);
        if(res.data.reload){
          this.page = 1
          this.limit = 10
          this.loadTable();
        }
        
      }
    )
    
    return await modal.present();
  }

  async table_info(item:any) {
    const modal = await this.modalController.create({
      component: TableInfoPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'table': item,
        'status': 0
       
      }
    });

    modal.onDidDismiss().then(
      res=>{
        if(res.data.reload){
          this.page = 1
          this.limit = 10
          this.loadTable();
        }
        
      }
    )
    
    return await modal.present();
  }

  close(){

    this.route.navigate(['/tabs/account'])
  }

  async loadTable(){
    const data={

      page:this.page,
      limit:this.limit,
      keyword:this.keyword
    }
    console.log("-----data sent to server",data);
  
    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
     
    });
    loader.present();
    
  this.table.list_table(data).subscribe(
    res=>{
          this.table_list = res.Data
      loader.dismiss();
    },err=>{
      loader.dismiss();
    }
  )
  }

async  doInfinite(event) {
    
    const data={

      page:this.page+1,
      limit:this.limit,
      keyword:this.keyword
    }
    console.log("-----data sent to server",data);
  
    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
     
    });
    loader.present();
    
      this.table.list_table(data).subscribe(
        res=>{
          try {
            if (res.Data.length) {
              this.table_list = this.table_list.concat(res.Data);
              event.target.complete();
            }else{
              console.log('else');
              
              event.target.complete();
              event.target.disabled = true;
            }
          } catch (error) {
            event.target.complete();
            event.target.disabled = true;
          }
          loader.dismiss();
        },err=>{
          loader.dismiss();
        }
      )

   
  }


  

}
