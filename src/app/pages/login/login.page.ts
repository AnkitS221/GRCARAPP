import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router, public menuCtrl: MenuController) {}

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  onClick() {
    this.router.navigate(['folder/Dashboard']);
  }
}
