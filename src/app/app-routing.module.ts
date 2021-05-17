import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',redirectTo: 'login', pathMatch: 'full'
   
 },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'table-view',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'product-info',
    loadChildren: () => import('./product-info/product-info.module').then( m => m.ProductInfoPageModule)
  },
  {
    path: 'view-document',
    loadChildren: () => import('./view-document/view-document.module').then( m => m.ViewDocumentPageModule)
  },
  {
    path: 'signature-pad',
    loadChildren: () => import('./signature-pad/signature-pad.module').then( m => m.SignaturePadPageModule)
  },
  {
    path: 'view-document-nomal',
    loadChildren: () => import('./view-document-nomal/view-document-nomal.module').then( m => m.ViewDocumentNomalPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'item-list',
    loadChildren: () => import('./item-list/item-list.module').then( m => m.ItemListPageModule)
  },
  {
    path: 'invice-bill',
    loadChildren: () => import('./invice-bill/invice-bill.module').then( m => m.InviceBillPageModule)
  },
  {
    path: 'item-info',
    loadChildren: () => import('./item-info/item-info.module').then( m => m.ItemInfoPageModule)
  },
  {
    path: 'printer',
    loadChildren: () => import('./printer/printer.module').then( m => m.PrinterPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'report-view',
    loadChildren: () => import('./report-view/report-view.module').then( m => m.ReportViewPageModule)
  },
  {
    path: 'table',
    loadChildren: () => import('./table/table.module').then( m => m.TablePageModule)
  },
  {
    path: 'table-manage',
    loadChildren: () => import('./table-manage/table-manage.module').then( m => m.TableManagePageModule)
  },
  {
    path: 'product-manage',
    loadChildren: () => import('./product-manage/product-manage.module').then( m => m.ProductManagePageModule)
  },
  {
    path: 'table-info',
    loadChildren: () => import('./table-info/table-info.module').then( m => m.TableInfoPageModule)
  },
  {
    path: 'table-add',
    loadChildren: () => import('./table-add/table-add.module').then( m => m.TableAddPageModule)
  },
  {
    path: 'category-manage',
    loadChildren: () => import('./category-manage/category-manage.module').then( m => m.CategoryManagePageModule)
  },
  {
    path: 'category-add',
    loadChildren: () => import('./category-add/category-add.module').then( m => m.CategoryAddPageModule)
  },
  {
    path: 'category-info',
    loadChildren: () => import('./category-info/category-info.module').then( m => m.CategoryInfoPageModule)
  },
  {
    path: 'product-add',
    loadChildren: () => import('./product-add/product-add.module').then( m => m.ProductAddPageModule)
  },  {
    path: 'option',
    loadChildren: () => import('./option/option.module').then( m => m.OptionPageModule)
  },
  {
    path: 'report-select',
    loadChildren: () => import('./report-select/report-select.module').then( m => m.ReportSelectPageModule)
  },
  {
    path: 'user-manage',
    loadChildren: () => import('./user-manage/user-manage.module').then( m => m.UserManagePageModule)
  },
  {
    path: 'user-add',
    loadChildren: () => import('./user-add/user-add.module').then( m => m.UserAddPageModule)
  },
  {
    path: 'user-info',
    loadChildren: () => import('./user-info/user-info.module').then( m => m.UserInfoPageModule)
  },





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
