import { Component, OnInit } from '@angular/core';
import { BtnCellRendererComponent } from './btn-cell-renderer/btn-cell-renderer.component';
import { Location } from '@angular/common';

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
    { make: 'Toyota', model: 'Celica', price: '', bal: 200 },
    { make: 'Ford', model: 'Mondeo', price: '', bal: 500 },
    { make: 'Porsche', model: 'Boxter', price: '', bal: 800 }
  ];
  defaultColDef;
  constructor(private location: Location) { }

  ngOnInit() {
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
