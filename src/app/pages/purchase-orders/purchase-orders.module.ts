import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchaseOrdersPageRoutingModule } from './purchase-orders-routing.module';

import { PurchaseOrdersPage } from './purchase-orders.page';
import { FilterPageModule } from './filter-details/filter-details.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterPageModule,
    PurchaseOrdersPageRoutingModule
  ],
  declarations: [PurchaseOrdersPage]
})
export class PurchaseOrdersPageModule {}
