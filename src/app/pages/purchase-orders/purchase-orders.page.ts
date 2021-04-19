import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterDetailsComponent } from './filter-details/filter-details.component';

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.page.html',
  styleUrls: ['./purchase-orders.page.scss'],
})
export class PurchaseOrdersPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  goToScan() {

  }

  async goToFilter() {
    const modal = await this.modalCtrl.create({
      component: FilterDetailsComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
