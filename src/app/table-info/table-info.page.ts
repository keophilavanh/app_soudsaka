import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { TableService} from "src/service/table.service";
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.page.html',
  styleUrls: ['./table-info.page.scss'],
})
export class TableInfoPage implements OnInit {

 
  
  @Input() table:any;
  public table_name:string 

  constructor(private modalCtrl:ModalController,private alertController:AlertController,public loadingCtrl: LoadingController,private tableService:TableService) { }

  ngOnInit() {
    this.table_name = this.table.table_number;
    console.log(this.table);
    
  }

  dismiss() {

    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  keyname(event: KeyboardEvent) {
    this.table_name = (event.target as HTMLInputElement).value;

  }

async  save(){

    if(!this.table_name){

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'ຊື້ໂຕະບໍ່ມີຂໍ້ມູນ',
       
        message: 'ກະລຸນາປ້ອມຂໍ້ມູນໃຫ້ຄົບ',
        buttons: ['OK']
      });
  
      await alert.present();

      return 
    }

    this.table.table_number = this.table_name;

    this.update(this.table)


   
  }




  async  update(data:any){

    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
     
    });
    loader.present();

    this.tableService.edit_table(data).subscribe(
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
            this.delete(this.table)
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

    this.tableService.delete_table(data).subscribe(
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
