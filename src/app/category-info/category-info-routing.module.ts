import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryInfoPage } from './category-info.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryInfoPageRoutingModule {}
