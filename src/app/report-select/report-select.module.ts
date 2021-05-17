import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportSelectPageRoutingModule } from './report-select-routing.module';

import { ReportSelectPage } from './report-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportSelectPageRoutingModule
  ],
  declarations: [ReportSelectPage]
})
export class ReportSelectPageModule {}
