import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableManagePageRoutingModule } from './table-manage-routing.module';

import { TableManagePage } from './table-manage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableManagePageRoutingModule
  ],
  declarations: [TableManagePage]
})
export class TableManagePageModule {}
