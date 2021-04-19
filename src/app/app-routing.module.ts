import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'merchandises',
    loadChildren: () => import('./pages/merchandises/merchandises.module').then( m => m.MerchandisesPageModule)
  },  {
    path: 'purchase-orders',
    loadChildren: () => import('./pages/purchase-orders/purchase-orders.module').then( m => m.PurchaseOrdersPageModule)
  },
  {
    path: 'po-details-edit',
    loadChildren: () => import('./pages/po-details-edit/po-details-edit.module').then( m => m.PoDetailsEditPageModule)
  },
  {
    path: 'scan-details',
    loadChildren: () => import('./pages/scan-details/scan-details.module').then( m => m.ScanDetailsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
