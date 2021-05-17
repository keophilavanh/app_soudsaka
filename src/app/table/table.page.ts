import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import {TableService} from "src/service/table.service"
@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {
  public table_list:Array<any> = [];
  constructor(private route:Router,public loadingCtrl: LoadingController,private table:TableService) { }


  ngOnInit() {
    this.loadTable()
  }

  
  async loadTable(){
    const data={

      page:'',
      limit:'',
      keyword:''
    }
    console.log("-----data sent to server",data);
  
    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
     
    });
    loader.present();
    
  this.table.list_table(data).subscribe(
    res=>{
      console.log(res);
      
          this.table_list = res.Data
      loader.dismiss();
    },err=>{
      loader.dismiss();
    }
  )
  }


  tab1(item:any) {
    this.route.navigate(['./table-view'], { queryParams: { table_id: item.t_id, table_name: item.table_number } });
  } 

}
