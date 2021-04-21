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
    purchase_type: 'LN',
    shipping_date: '22/2/2021',
    purchase_type_desc: 'Line Receive',
  }, {
    purchase_id: 'PO123456779',
    subtext: '7 articles',
    purchase_type: 'TR',
    shipping_date: '27/4/2021',
    purchase_type_desc: 'Trusted',
  }, {
    purchase_id: 'PO123456780',
    subtext: 'Handling Units - 2',
    purchase_type: 'LN',
    shipping_date: '22/6/2021',
    purchase_type_desc: 'Line Receive',
  }, {
    purchase_id: 'PO123456781',
    subtext: 'Handling Units - 2',
    purchase_type: 'LN',
    shipping_date: '13/8/2021',
    purchase_type_desc: 'Line Receive',
  },
  {
    purchase_id: 'PO123456782',
    subtext: 'Handling Units - 2',
    purchase_type: 'TR',
    purchase_type_desc: 'Trusted',
    shipping_date: '13/8/2021'
  },
  {
    purchase_id: 'PO123456783',
    subtext: 'Handling Units - 6',
    purchase_type: 'LN',
    purchase_type_desc: 'Line Receive',
    shipping_date: '13/8/2021'
  },
  {
    purchase_id: 'PO123456784',
    subtext: '77 articles',
    purchase_type: 'TR',
    purchase_type_desc: 'Trusted',
    shipping_date: '13/8/2021'
  },
  {
    purchase_id: 'PO123456781',
    subtext: 'Handling Units - 2',
    purchase_type: 'TR',
    purchase_type_desc: 'Trusted',
    shipping_date: '13/8/2021'
  },
  {
    purchase_id: 'PO123456781',
    subtext: 'Handling Units - 2',
    purchase_type: 'TR',
    purchase_type_desc: 'Trusted'
  },
  {
    purchase_id: 'PO123456781',
    subtext: 'Handling Units - 2',
    purchase_type: 'TR',
    purchase_type_desc: 'Trusted',
    shipping_date: '14/5/2021'
  },
  {
    purchase_id: 'PO123456781',
    subtext: 'Handling Units - 2',
    purchase_type: 'TR',
    purchase_type_desc: 'Trusted',
    shipping_date: '13/8/2021'
  },
  {
    purchase_id: 'PO123456781',
    subtext: 'Handling Units - 2',
    purchase_type: 'TR',
    purchase_type_desc: 'Trusted',
    shipping_date: '13/8/2021'
  },
  {
    purchase_id: 'PO123456781',
    subtext: 'Handling Units - 2',
    purchase_type: 'TR',
    purchase_type_desc: 'Trusted',
    shipping_date: '13/8/2021'
  },
  {
    purchase_id: 'PO123456781',
    subtext: 'Handling Units - 2',
    shipping_date: '13/8/2021',
    purchase_type: 'TR',
    purchase_type_desc: 'Trusted',
  },
  {
    purchase_id: 'PO123456781',
    subtext: 'Handling Units - 2',
    shipping_date: '13/8/2021',
    purchase_type: 'TR',
    purchase_type_desc: 'Trusted',
  },
  {
    purchase_id: 'PO123456781',
    subtext: 'Handling Units - 2',
    shipping_date: '13/8/2021',
    purchase_type: 'TR',
    purchase_type_desc: 'Trusted',
  },
  {
    purchase_id: 'PO123456781',
    subtext: 'Handling Units - 2',
    shipping_date: '13/8/2021',
    purchase_type: 'TR',
    purchase_type_desc: 'Trusted'
  }];

  originalArr = [];
  constructor(private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
    this.originalArr = this.arr;
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

  async filterList(evt) {
    const searchTerm = evt.srcElement.value;
  if(searchTerm === '') {
    this.arr = this.originalArr
  }
    if (!searchTerm) {
      return;
    }
  
    this.arr = this.arr.filter(currentOrder => {
      if (currentOrder.purchase_id && searchTerm) {
        return (currentOrder.purchase_id.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }

}
