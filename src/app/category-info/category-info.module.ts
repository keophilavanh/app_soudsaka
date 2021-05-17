import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryInfoPageRoutingModule } from './category-info-routing.module';

import { CategoryInfoPage } from './category-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryInfoPageRoutingModule
  ],
  declarations: [CategoryInfoPage]
})
export class CategoryInfoPageModule {}
