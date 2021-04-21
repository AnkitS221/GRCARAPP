import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Goods Receiving', url: '/purchase-orders', icon: 'aperture' },
    { title: 'Goods Movement', url: '/none', icon: 'mail' },
    { title: 'Physical Inventory', url: '/none', icon: 'paper-plane' },
    { title: 'Label Printing', url: '/none', icon: 'heart' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
