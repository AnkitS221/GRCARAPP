import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Goods Received', url: '/purchase-orders', icon: 'aperture' },
    { title: 'Goods Movement', url: 'merchandises', icon: 'mail' },
    { title: 'Physical Inventory', url: '/folder/bpConnect', icon: 'paper-plane' },
    { title: 'Label Printing', url: '/folder/mkdPlanning', icon: 'heart' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
