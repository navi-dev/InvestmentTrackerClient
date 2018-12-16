import { Component } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})

export class LoginComponent {

  constructor(private adlservice: MsAdalAngular6Service) {

  }

  login() {
    this.adlservice.login();
  }
}
