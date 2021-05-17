import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDocumentNomalPage } from './view-document-nomal.page';

const routes: Routes = [
  {
    path: '',
    component: ViewDocumentNomalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewDocumentNomalPageRoutingModule {}
