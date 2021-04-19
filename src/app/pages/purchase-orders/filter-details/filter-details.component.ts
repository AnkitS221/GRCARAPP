import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-details',
  templateUrl: './filter-details.component.html',
  styleUrls: ['./filter-details.component.scss'],
})
export class FilterDetailsComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  goToListing() {
    this.modalCtrl.dismiss();
  }

}
