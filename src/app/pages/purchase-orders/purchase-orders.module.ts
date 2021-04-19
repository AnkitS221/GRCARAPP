import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchaseOrdersPageRoutingModule } from './purchase-orders-routing.module';

import { PurchaseOrdersPage } from './purchase-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseOrdersPageRoutingModule
  ],
  declarations: [PurchaseOrdersPage]
})
export class PurchaseOrdersPageModule {}
