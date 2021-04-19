import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-btn-cell-renderer',
  templateUrl: './btn-cell-renderer.component.html',
  styleUrls: ['./btn-cell-renderer.component.scss'],
})
export class BtnCellRendererComponent implements ICellRendererAngularComp {

  constructor(private barcodeScanner: BarcodeScanner) { }

  params;

    agInit(params): void {
        this.params = params;
    }

    refresh(params?: any): boolean {
        return true;
    }

    onAction($event,opt:string) {
        if (this.params.onClick instanceof Function) { 
            const params = {'action':opt,'event': $event,'rowData': this.params.node.data}
            this.params.onClick(params);
        }
    }

    openScanner() {
      this.barcodeScanner.scan().then(barcodeData => {
        console.log('Barcode data', barcodeData);
        if (barcodeData) {
         // this.router.navigate(['po-details-edit']);
        }
      }).catch(err => {
        console.log('Error', err);
      });
    }

}
