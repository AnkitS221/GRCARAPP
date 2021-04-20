import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanDetailsPageRoutingModule } from './scan-details-routing.module';

import { ScanDetailsPage } from './scan-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    ScanDetailsPageRoutingModule
  ],
  declarations: [ScanDetailsPage]
})
export class ScanDetailsPageModule {}
