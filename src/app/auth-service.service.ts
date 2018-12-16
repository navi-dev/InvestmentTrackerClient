import { Injectable } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Injectable()
export class AuthService {
  constructor(private service: MsAdalAngular6Service) {

  }

  GetAccessToken() {
    return this.service ? this.service.accessToken : '';
  }
}
