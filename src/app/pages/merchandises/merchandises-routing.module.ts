import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchandisesPage } from './merchandises.page';

const routes: Routes = [
  {
    path: '',
    component: MerchandisesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchandisesPageRoutingModule {}
