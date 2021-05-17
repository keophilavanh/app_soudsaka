import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InviceBillPage } from './invice-bill.page';

const routes: Routes = [
  {
    path: '',
    component: InviceBillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InviceBillPageRoutingModule {}
