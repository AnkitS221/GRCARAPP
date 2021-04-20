import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterDetailsComponent } from './filter-details/filter-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.page.html',
  styleUrls: ['./purchase-orders.page.scss'],
})
export class PurchaseOrdersPage implements OnInit {

  arr = Array<any>(16)
  constructor(private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
  }

  goToScan() {
    this.router.navigate(['scan-details']);
  }

  async goToFilter() {
    const modal = await this.modalCtrl.create({
      component: FilterDetailsComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  goToEdit() {
    this.router.navigate(['po-details-edit']);
  }

}
