import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableAddPage } from './table-add.page';

const routes: Routes = [
  {
    path: '',
    component: TableAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableAddPageRoutingModule {}
