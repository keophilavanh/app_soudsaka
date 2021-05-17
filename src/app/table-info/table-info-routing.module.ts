import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableInfoPage } from './table-info.page';

const routes: Routes = [
  {
    path: '',
    component: TableInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableInfoPageRoutingModule {}
