import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewDocumentPageRoutingModule } from './view-document-routing.module';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ViewDocumentPage } from './view-document.page';
//import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDocumentPageRoutingModule,
    PdfViewerModule,
    

  ],
  declarations: [ViewDocumentPage]
})
export class ViewDocumentPageModule {}
