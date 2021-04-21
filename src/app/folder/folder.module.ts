import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { GoogleChartsModule } from 'angular-google-charts';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GoogleChartsModule,
    IonicModule.forRoot(),
    FolderPageRoutingModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
