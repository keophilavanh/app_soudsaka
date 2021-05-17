import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.page.html',
  styleUrls: ['./item-info.page.scss'],
})
export class ItemInfoPage implements OnInit {

  @Input() item: any;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  remove_qty(){
    if(this.item.quantity > 1){
      this.item.quantity--;
      this.item.total = (this.item.quantity*this.item.price)
    }
  }

  sum_qty(){
    this.item.quantity++
    this.item.total = (this.item.quantity*this.item.price)
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }


  edit(){
    this.modalCtrl.dismiss({
      'dismissed': false,
        edit:true,
        item:this.item
    });
  }

  delete(){
    this.modalCtrl.dismiss({
      'dismissed': false,
        remove:true,
        item:this.item
    });
  }

}
