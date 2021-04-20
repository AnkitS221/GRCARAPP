import { Component, OnInit } from '@angular/core';
import { BtnCellRendererComponent } from './btn-cell-renderer/btn-cell-renderer.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-po-details-edit',
  templateUrl: './po-details-edit.page.html',
  styleUrls: ['./po-details-edit.page.scss'],
})
export class PoDetailsEditPage implements OnInit {

  title = 'app';

  columnDefs = [];
  frameworkComponents: {
    // btnCellRenderer: BtnCellRendererComponent,
  }
  rowData = [
    { make: 'Toyota', model: 100, price: 0, bal: 200 },
    { make: 'Ford', model: 200, price: 0, bal: 500 },
    { make: 'Porsche', model: 300, price: 0, bal: 800 }
  ];
  defaultColDef;
  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if(navigation.extras.state.transd === 'TR') {
      this.rowData = [
        { make: 'Toyota', model: 100, price: 200, bal: 200 },
        { make: 'Ford', model: 200, price: 500, bal: 500 },
        { make: 'Porsche', model: 300, price: 800, bal: 800 }
      ];
    }
    this.defaultColDef = {
      width: 100,
    };
    this.columnDefs = [
      { headerName: 'Article Description', field: 'make' },
      { headerName: 'Shipped', field: 'model' },
      { headerName: 'Balance', field: 'bal' },
      { headerName: 'Received', field: 'price', editable: true },
      { headerName: "Scan", maxWidth: 130, cellRenderer: 'buttonRenderer', cellRendererParams: { onClick: this.onAggridAction.bind(this) } }

    ];
    this.frameworkComponents = { buttonRenderer: BtnCellRendererComponent }; // Ag-grid
  }

  public onAggridAction(e) {
    if (e.action === 'invite') {
      // this.modalService.dismissAll();
      // this.OpenRequestmail(this.invitationModel, e.rowData.emailAddress);
    } else if (e.action === 'supend') {

    } else if (e.action === 'log') {

    }
  }

  goBack() {
    this.location.back();
  }

}
