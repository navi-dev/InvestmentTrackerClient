
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: MsAdalAngular6Service) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.accessToken}`
      }
    });

    return next.handle(request);
  }
}
