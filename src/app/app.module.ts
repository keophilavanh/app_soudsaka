import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import {  HttpClientModule } from '@angular/common/http';
import { Downloader } from '@ionic-native/downloader/ngx';
import { APIService } from 'src/service/api.service';
import { AuthService } from 'src/service/auth.service';
import { BrandService } from 'src/service/BrandService';

import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { Printer } from '@ionic-native/printer/ngx';

import {PrinterService} from './../printer_bluetoothserial/printer.service';
import {ProductService} from "src/service/product.service"

@NgModule({
  declarations: [AppComponent ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    FileOpener,
    File,
    DocumentViewer,
    FileTransfer,
    PreviewAnyFile,
    PdfViewerModule,
 

   //services
   APIService,
    Downloader,
    AuthService,
    BrandService,
    BluetoothSerial,
    Printer,
    PrinterService,
    ProductService,
  
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
