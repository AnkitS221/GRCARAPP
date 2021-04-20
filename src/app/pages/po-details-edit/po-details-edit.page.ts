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
  navigation: any;
  columnDefs = [];
  frameworkComponents: {
    // btnCellRenderer: BtnCellRendererComponent,
  }
  rowData = [
    { make: 'G425 Max Driver', model: 100, price: 0, bal: 200 },
    { make: 'SIM2 Driver', model: 200, price: 0, bal: 500 },
    { make: 'Epic Speed Driver', model: 300, price: 0, bal: 800 },
    { make: 'KING RADSPEED Driver', model: 300, price: 0, bal: 800 },
    { make: 'G410 4-PW Black Dot Iron Set', model: 300, price: 0, bal: 800 },
    { make: 'SIM Max Iron Set w/ Steel', model: 300, price: 0, bal: 800 },
    { make: 'MAVRIK Max Iron Set w/ Steel Shafts', model: 300, price: 0, bal: 800 },
  ];
  defaultColDef;
  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
    this.navigation = this.router.getCurrentNavigation();
    if (this.navigation.extras.state.transd === 'TR') {
      this.rowData = [
        { make: 'G425 Max Driver', model: 100, price: 200, bal: 200 },
        { make: 'SIM2 Driver', model: 200, price: 450, bal: 500 },
        { make: 'Epic Speed Driver', model: 300, price: 790, bal: 800 }
      ];
    }
    this.defaultColDef = {
      width: 100,
    };
    this.columnDefs = [
      { headerName: 'Article Description', field: 'make', width: 200 },
      { headerName: 'Received', field: 'price', editable: true, singleClickEdit: true },
      { headerName: "Scan", maxWidth: 130, cellRenderer: 'buttonRenderer', cellRendererParams: { onClick: this.onAggridAction.bind(this) } },
      { headerName: 'Shipped', field: 'model' },
      { headerName: 'Balance', field: 'bal' },

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
