import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {SignaturePadPage} from '../signature-pad/signature-pad.page';

import { DocumentViewer,DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { Platform } from '@ionic/angular';

import { BrandService } from "../../service/BrandService";





@Component({
  selector: 'app-view-document',
  templateUrl: './view-document.page.html',
  styleUrls: ['./view-document.page.scss'],
})
export class ViewDocumentPage implements OnInit {
  @ViewChild('pdfViewer') public pdfViewer;
  sliderOpt = {
    zoom: {
      maxRatio: 2,
    },
  };
  public zom = 1;
  public pdfSrc="";
  private url;


  constructor(private route:Router,private router: ActivatedRoute,private brandService:BrandService,private file:File,private platform:Platform,private modalController: ModalController,public loadingCtrl: LoadingController, public alertCtrl: AlertController, private _location: Location,public document: DocumentViewer,public fileTransfer:FileTransfer,public fileOpener: FileOpener,private previewAnyFile: PreviewAnyFile) { }

  async ngOnInit() {
    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
      duration: 2000

    });  
    loader.present(); 

    this.url = this.brandService.getUrl();
  
   this.load();
  }

  onError(error: any) {
    // do anything
    console.log();
    
  }


  load(){
    

   
    this.router
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.load_file(params['fileId']) ;
      });
  }


  load_file(fileId:number){
    
    this.pdfSrc = this.url+"/Print-invoice-Finance-IN/"+fileId;
    // this.pdfViewer.pdfSrc  ="http://192.168.1.11/Aiynoy/Print-invoice-Finance-IN/"+fileId;
    // this.pdfViewer.refresh();
  }

  zoomin(){
    this.zom += 0.1;
  }

  zoomout(){
    this.zom -= 0.1;
  }

 
refresh(){
 
  
  this.pdfSrc ="http://192.168.1.11/Aiynoy/Print-invoice-Finance-IN-reload/26";

  setTimeout(() => {
    this.load();
  }, 100);

 
}




async  view_file(){

    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
      duration: 2000

    });
   
    loader.present();

    
    this.previewAnyFile.preview(this.pdfSrc)
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));
   
    //   const options: DocumentViewerOptions = {
    //     title: 'My PDF'
    //   }
     
    //  // let part = this.file.applicationDirectory+'www/assets';
    //  let part ='http://192.168.1.11/api_doc/assets/example.pdf'

    //   if(this.platform.is('android')){
    //     let fakename = Date.now();
    //     this.file.copyFile(part,'example.pdf',this.file.dataDirectory,`${fakename}.pdf`).then(res=>{
    //       console.log(res);
          
    //       this.fileOpener.open(res.nativeURL, 'application/pdf');
    //     });
    //   }else{
    //     this.document.viewDocument(`${part}/example.pdf`, 'application/pdf', options);
    //   }

     
      
     

      
   

  }

  black() {
    //this._location.back();
    this.route.navigate(['tabs/tab1']);
    
  }




  async no_active() {

    let alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'ຢືນຢັນ ຄຳສັ່ງ',
      message: ' <strong> ທ່ານຈະບໍ່ອະນຸມັດ ເອກະສານແມ່ນບໍ່?</strong>!!!',
      buttons: [
        {
          text: 'ແມ່ນ',
          handler: (blah) => {
           
            this.black();


          }
        }, {
          text: 'ບໍ່ແມ່ນ',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }
      ]
    });

    await alert.present();

  }

  async  SignaturePad(){
    const modal = await this.modalController.create({
      component: SignaturePadPage,
      cssClass: 'my-custom-class',
      componentProps: {
      }
    });

    modal.onDidDismiss().then(
      res => {
        console.log(res);
        if(res.data.save == true){
          const data={
            sen:res.data.img,
            finance_in_id:26
          }
          this.brandService.sen_file(data).subscribe(
            re=>{
              console.log(re);
              this.refresh();
              
            }
          )
        }
        
      }
    )

    return await modal.present();
  
  }
}
