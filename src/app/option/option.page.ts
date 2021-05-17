import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-option',
  templateUrl: './option.page.html',
  styleUrls: ['./option.page.scss'],
})
export class OptionPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    private alertController:AlertController,
    public route:Router,
  ) { }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }


async  payment() {
    
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ຢືນຢັນ!',
      message: ' <strong> ການຊຳລະເງີນ </strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.modalCtrl.dismiss({
              'payment': true,
              
            });
          }
        }
      ]
    });

    await alert.present();
   
  }


  print() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'print': true,
     
    });
  }

}
