import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { CategoryService} from "src/service/category.service";
import { LoadingController } from '@ionic/angular';
import { FoodService} from "src/service/food.service";

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.page.html',
  styleUrls: ['./product-info.page.scss'],
})
export class ProductInfoPage implements OnInit {

  @Input() item:any;
  
  public food_name:string ;
  public food_detell:string ;
  public price:number ;
  public category_id:number;
  public category_name:string;
  public Category_list:Array<any> = [];

  constructor(private modalCtrl:ModalController,private alertController:AlertController,public loadingCtrl: LoadingController,private Food:FoodService,private Category:CategoryService) { }

  ngOnInit() {
    
    console.log(this.item);
    this.food_name = this.item.f_name;
    this.category_id = this.item.c_id;
    this.category_name = this.item.c_name;
    this.food_detell = this.item.f_detail;
    this.price = this.item.price;
    this.loadCategory()

    console.log(this.category_id);
    
    
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

async  save(){

    if(!this.food_name || !this.price || !this.category_id){

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'ຊື້ໂຕະບໍ່ມີຂໍ້ມູນ',
       
        message: 'ກະລຸນາປ້ອມຂໍ້ມູນໃຫ້ຄົບ',
        buttons: ['OK']
      });
  
      await alert.present();

      return 
    }

    this.item.f_name = this.food_name;
    this.item.c_id = this.category_id;
    this.item.f_detail = this.food_detell;
    this.item.price = this.price;

    this.update(this.item)


   
  }




  async  update(data:any){

    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
     
    });
    loader.present();

    this.Food.updatefood(data).subscribe(
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


  async  remove(){

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>ລົບຂໍ້ມູນ</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.delete(this.item)
          }
        }
      ]
    });

    await alert.present();

   

   


   
  }

  async  delete(data:any){

    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
     
    });
    loader.present();

    this.Food.deletefood(data).subscribe(
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



  reload(){
    this.modalCtrl.dismiss({
      'reload': true,
    });
  }

}