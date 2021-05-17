import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { UserAddPage } from '../user-add/user-add.page';
import { UserInfoPage } from '../user-info/user-info.page';
import {UserService} from "src/service/user.service"

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.page.html',
  styleUrls: ['./user-manage.page.scss'],
})
export class UserManagePage implements OnInit {

  public page:number=1
  public limit : number=10
  public keyword: string

  public table_list:Array<any> = [];

  constructor(private modalController:ModalController,private route:Router,public loadingCtrl: LoadingController,private user:UserService) { }

  ngOnInit() {
    this.loadTable()
  }

  async add_table() {
    const modal = await this.modalController.create({
      component: UserAddPage,
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
      component: UserInfoPage,
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
    
  this.user.userlist(data).subscribe(
    res=>{
      console.log(res);
      
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
    
      this.user.userlist(data).subscribe(
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

