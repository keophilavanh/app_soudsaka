import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportViewPageRoutingModule } from './report-view-routing.module';

import { ReportViewPage } from './report-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportViewPageRoutingModule
  ],
  declarations: [ReportViewPage]
})
export class ReportViewPageModule {}
