import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableManagePage } from './table-manage.page';

const routes: Routes = [
  {
    path: '',
    component: TableManagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableManagePageRoutingModule {}
