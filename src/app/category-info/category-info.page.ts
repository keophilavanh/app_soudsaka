import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { CategoryService} from "src/service/category.service";
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-category-info',
  templateUrl: './category-info.page.html',
  styleUrls: ['./category-info.page.scss'],
})
export class CategoryInfoPage implements OnInit {

  
  
  @Input() item:any;
  public category_name:string 

  constructor(private modalCtrl:ModalController,private alertController:AlertController,public loadingCtrl: LoadingController,private Category:CategoryService) { }

  ngOnInit() {
    this.category_name = this.item.c_name;
    console.log(this.item);
    
  }

  dismiss() {

    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  keyname(event: KeyboardEvent) {
    this.category_name = (event.target as HTMLInputElement).value;

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

    this.item.c_name = this.category_name;

    this.update(this.item)


   
  }




  async  update(data:any){

    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
     
    });
    loader.present();

    this.Category.updatecategory(data).subscribe(
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

    this.Category.deletecategory(data).subscribe(
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
