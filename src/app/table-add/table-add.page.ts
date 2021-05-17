import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { TableService} from "src/service/table.service";
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-table-add',
  templateUrl: './table-add.page.html',
  styleUrls: ['./table-add.page.scss'],
})
export class TableAddPage implements OnInit {

  public table_name:string 

  constructor(private modalCtrl:ModalController,private alertController:AlertController,public loadingCtrl: LoadingController,private table:TableService) { }

  ngOnInit() {
  }

  dismiss() {

    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  keyname(event: KeyboardEvent) {
    this.table_name = (event.target as HTMLInputElement).value;

  }

async  add(data:any){

    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
     
    });
    loader.present();

    this.table.add_table(data).subscribe(
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

    const data = {
      table_number:this.table_name
    }

    this.add(data)

    
  }

  reload(){
    this.modalCtrl.dismiss({
      'reload': true,
    });
  }

}
