import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterDetailsComponent } from './filter-details/filter-details.component';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.page.html',
  styleUrls: ['./purchase-orders.page.scss'],
})
export class PurchaseOrdersPage implements OnInit {

  arr = [{
    purchase_id: 'PO123456778',
    subtext: '7 articles',
    purchase_type: 'LN'
  }, {
    purchase_id: 'PO123456779',
    subtext: '7 articles',
    purchase_type: 'TR'
  }, {
    purchase_id: 'PO123456780',
    subtext: 'Handling Units - 2',
    purchase_type: 'LN'
  }, {
    purchase_id: 'PO123456781',
    subtext: 'Handling Units - 2',
    purchase_type: 'TR'
  }];

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

  goToEdit(type: string) {
    const navigationExtras: NavigationExtras = {
      state: {
        transd: type,
      }
    };
    this.router.navigate(['po-details-edit'], navigationExtras);
  }

}
