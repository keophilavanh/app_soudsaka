import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportSelectPage } from './report-select.page';

const routes: Routes = [
  {
    path: '',
    component: ReportSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportSelectPageRoutingModule {}
