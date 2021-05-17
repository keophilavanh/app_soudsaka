import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FoodService} from "src/service/food.service";
import { CategoryService } from "src/service/category.service";
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class ProductAddPage implements OnInit {

 
  public food_name:string ;
  public food_detell:string ;
  public price:number ;
  public category_id:number;

  public Category_list:Array<any> = [];

  constructor(private modalCtrl:ModalController,private alertController:AlertController,public loadingCtrl: LoadingController,private Food:FoodService,private Category:CategoryService) { }

  ngOnInit() {
    this.loadCategory()
  }

  dismiss() {

    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  keyname(event: KeyboardEvent) {
    this.food_name = (event.target as HTMLInputElement).value;

  }

  keyprice(event: KeyboardEvent) {
    this.price = parseInt((event.target as HTMLInputElement).value) ;

  }

  keyfood_detell(event: KeyboardEvent) {
    this.food_detell = (event.target as HTMLInputElement).value;

  }

  async loadCategory(){
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
    
  this.Category.categorylist(data).subscribe(
    res=>{
      console.log(res);
      
          this.Category_list = res.Data
      loader.dismiss();
    },err=>{
      loader.dismiss();
    }
  )
  }

async  add(data:any){

    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
     
    });
    loader.present();

    this.Food.addfood(data).subscribe(
      res=>{

        console.log(res);
        
        loader.dismiss()
        this.reload();

      },
      err=>{
        console.log(err);
        loader.dismiss()
      }
    )
    
  }

async  save(){


    if(!this.food_name || !this.price ||  !this.category_id){

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'ປ້ອມຂໍ້ມູນບໍ່ຄົບ',
       
        message: 'ກະລຸນາປ້ອມຂໍ້ມູນໃຫ້ຄົບ',
        buttons: ['OK']
      });
  
      await alert.present();

      return 
    }

    const data = {
      c_id: this.category_id,
      f_name:this.food_name,
      price:this.price,
      f_detail:this.food_detell
  
     
    }
    console.log(data);
    
    this.add(data)

    
  }

  reload(){
    this.modalCtrl.dismiss({
      'reload': true,
    });
  }

}
