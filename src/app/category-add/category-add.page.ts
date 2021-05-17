import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { CategoryService} from "src/service/category.service";
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.page.html',
  styleUrls: ['./category-add.page.scss'],
})
export class CategoryAddPage implements OnInit {

  public category_name:string 

  constructor(private modalCtrl:ModalController,private alertController:AlertController,public loadingCtrl: LoadingController,private Category:CategoryService) { }

  ngOnInit() {
  }

  dismiss() {

    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  keyname(event: KeyboardEvent) {
    this.category_name = (event.target as HTMLInputElement).value;

  }

async  add(data:any){

    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
     
    });
    loader.present();

    this.Category.addcategory(data).subscribe(
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

    if(!this.category_name){

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'ຊື້ໂຕະບໍ່ມີຂໍ້ມູນ',
       
        message: 'ກະລຸນາປ້ອມຂໍ້ມູນໃຫ້ຄົບ',
        buttons: ['OK']
      });
  
      await alert.present();

      return 
    }

    const data = {
      c_name:this.category_name
    }

    this.add(data)

    
  }

  reload(){
    this.modalCtrl.dismiss({
      'reload': true,
    });
  }

}
