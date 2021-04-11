import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchandisesPageRoutingModule } from './merchandises-routing.module';

import { MerchandisesPage } from './merchandises.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchandisesPageRoutingModule
  ],
  declarations: [MerchandisesPage]
})
export class MerchandisesPageModule {}
