import { Component, OnInit,ViewChild  } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { BrandService } from "../../service/BrandService";
@Component({
  selector: 'app-signature-pad',
  templateUrl: './signature-pad.page.html',
  styleUrls: ['./signature-pad.page.scss'],
})
export class SignaturePadPage implements OnInit {

  // @ViewChild(SignaturePad) signaturePad: SignaturePad;
  @ViewChild ('signatureCanvas', {static: true}) signaturePad: SignaturePad;
 
  public signaturePadOptions: Object = { 
    'maxWidth': 1,
    'minWidth': 1,
    'canvasWidth': 350,
    'canvasHeight': 150
  };



  constructor(private modalController: ModalController,private brandService:BrandService) { }

  ngOnInit() {
  }

  drawComplete() {
    console.log('begin end');
    console.log(this.signaturePad.toDataURL());
  }
 
  drawStart() {
    
    console.log('begin drawing');
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  save() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data

  

    this.modalController.dismiss({
      'save': true,
      'img':this.signaturePad.toDataURL()
    });
  }

  clear(){
    this.signaturePad.clear();
  }

}
