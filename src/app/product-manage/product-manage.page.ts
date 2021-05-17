import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ProductAddPage } from '../product-add/product-add.page';
import { ProductInfoPage } from '../product-info/product-info.page';
import { FoodService } from "src/service/food.service"

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.page.html',
  styleUrls: ['./product-manage.page.scss'],
})
export class ProductManagePage implements OnInit {

 
  public page:number=1
  public limit : number=10
  public keyword: string

  public food_list:Array<any> = [];

  constructor(private modalController:ModalController,private route:Router,public loadingCtrl: LoadingController,private FoodService:FoodService) { }

  ngOnInit() {
    this.loadTable()
  }

  async add_table() {
    const modal = await this.modalController.create({
      component: ProductAddPage,
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
      component: ProductInfoPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'item': item,
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
    
  this.FoodService.foodlist(data).subscribe(
    res=>{
      console.log(res);
      
          this.food_list = res.Data
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
    
      this.FoodService.foodlist(data).subscribe(
        res=>{
          try {
            if (res.Data.length) {
              this.food_list = this.food_list.concat(res.Data);
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
