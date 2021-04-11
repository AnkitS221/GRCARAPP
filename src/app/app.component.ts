import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/folder/Dashboard', icon: 'aperture' },
    { title: 'Merchandise 360', url: 'merchandises', icon: 'mail' },
    { title: 'BP Connect', url: '/folder/bpConnect', icon: 'paper-plane' },
    { title: 'MKD Planning', url: '/folder/mkdPlanning', icon: 'heart' },
    { title: 'Merchandise Social', url: '/folder/mSocial', icon: 'archive' },
    { title: 'VM Analytics', url: '/folder/vmanalytics', icon: 'trash' },
    {
      title: 'Assortment Performance',
      url: '/folder/assortPerformance',
      icon: 'warning',
    },
    { title: 'Store 360', url: '/folder/s360', icon: 'recording' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
