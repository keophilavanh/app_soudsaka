import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableAddPageRoutingModule } from './table-add-routing.module';

import { TableAddPage } from './table-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableAddPageRoutingModule
  ],
  declarations: [TableAddPage]
})
export class TableAddPageModule {}
