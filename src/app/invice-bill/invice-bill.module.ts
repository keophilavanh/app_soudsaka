import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InviceBillPageRoutingModule } from './invice-bill-routing.module';

import { InviceBillPage } from './invice-bill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InviceBillPageRoutingModule
  ],
  declarations: [InviceBillPage]
})
export class InviceBillPageModule {}
