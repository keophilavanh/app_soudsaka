import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';


import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { Platform } from '@ionic/angular';

import { BrandService } from "../../service/BrandService";
import { Downloader,DownloadRequest } from '@ionic-native/downloader/ngx';


@Component({
  selector: 'app-view-document-nomal',
  templateUrl: './view-document-nomal.page.html',
  styleUrls: ['./view-document-nomal.page.scss'],
})
export class ViewDocumentNomalPage implements OnInit {

  @ViewChild('pdfViewer') public pdfViewer;
  sliderOpt = {
    zoom: {
      maxRatio: 2,
    },
  };
  public zom = 1;
  public pdfSrc="";
  private url;
  private file_Id;

  constructor(private downloader:Downloader,private route:Router,private router: ActivatedRoute,private brandService:BrandService,private file:File,private platform:Platform,private modalController: ModalController,public loadingCtrl: LoadingController, public alertCtrl: AlertController, private _location: Location,public document: DocumentViewer,public fileTransfer:FileTransfer,public fileOpener: FileOpener,private previewAnyFile: PreviewAnyFile) { }

async  ngOnInit() {
    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
      duration: 2000

    });  
    loader.present(); 

    this.url = this.brandService.getUrl();
  
   this.load();
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
    this.file_Id = fileId;
    this.pdfSrc = this.url+"/Print-invoice-Finance-IN/"+ this.file_Id;
    // this.pdfViewer.pdfSrc  ="http://192.168.1.11/Aiynoy/Print-invoice-Finance-IN/"+fileId;
    // this.pdfViewer.refresh();
  }

  zoomin(){
    this.zom += 0.1;
  }

  zoomout(){
    this.zom -= 0.1;
  }

  black() {
    //this._location.back();
    this.route.navigate(['tabs/tab2']);
    
  }

  async load_ok(str) {

    let alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'ດາວໂຫລດສຳເລັດ',
      message: ' <strong> '+str+'</strong>!!!',
      buttons: [
        {
          text: "ok",
          handler: (blah) => {
           
            this.black();


          }
        }
      ]
    });

    await alert.present();

  }

dowload(){
  var request: DownloadRequest = {
    uri: this.url+"/Print-invoice-Finance-IN/"+ this.file_Id,
    title: 'MyDownload',
    description: '',
    mimeType: '',
    visibleInDownloadsUi: true,
    destinationInExternalFilesDir: {
        dirType: 'Downloads',
        subPath: 'MyFile.pdf'
    }
};


this.downloader.download(request)
        .then((location: string) => this.load_ok(location))
        .catch((error: any) => console.error(error));
 }

 
}
