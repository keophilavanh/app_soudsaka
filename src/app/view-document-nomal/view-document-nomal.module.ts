import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { IonicModule } from '@ionic/angular';

import { ViewDocumentNomalPageRoutingModule } from './view-document-nomal-routing.module';

import { ViewDocumentNomalPage } from './view-document-nomal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDocumentNomalPageRoutingModule,
    PdfViewerModule
  ],
  declarations: [ViewDocumentNomalPage]
})
export class ViewDocumentNomalPageModule {}
