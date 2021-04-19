import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-details',
  templateUrl: './scan-details.page.html',
  styleUrls: ['./scan-details.page.scss'],
})
export class ScanDetailsPage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner, private router: Router) { }

  ngOnInit() {

  }


  openScanner() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      if (barcodeData) {
        this.router.navigate(['po-details-edit']);
      }
    }).catch(err => {
      console.log('Error', err);
    });
  }

}
