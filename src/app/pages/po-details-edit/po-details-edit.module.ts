import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoDetailsEditPageRoutingModule } from './po-details-edit-routing.module';

import { PoDetailsEditPage } from './po-details-edit.page';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoDetailsEditPageRoutingModule,
    AgGridModule.withComponents([])
  ],
  declarations: [PoDetailsEditPage]
})
export class PoDetailsEditPageModule {}
