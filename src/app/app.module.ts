import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { MsAdalAngular6Module, AuthenticationGuard } from 'microsoft-adal-angular6';
import { DashboardService } from './dashboard/dashboard.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from './../environments/environment';
import { ApiModule } from '../../node_modules/@navi-dev/api.module'
import { Configuration } from '../../node_modules/@navi-dev/configuration';
import { AuthService } from './auth-service.service';
// import { BASE_PATH } from '../../node_modules/@navi-dev/api';
import { TokenInterceptor } from './interceptor-service.service';
import { AzureComponent } from './azure/azure.component';

function getConfig(myAuthService: AuthService) {
  return new Configuration({
    basePath: environment.APIEndPoint,
  });
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    MsAdalAngular6Module.forRoot({
      tenant: environment.tenant,
      clientId: environment.clientId,
      redirectUri: environment.redirectUrlAfterLogin,
      postLogoutRedirectUri: environment.postLogoutRedirectUri,
      instance: 'https://login.microsoftonline.com/',
      endpoints: {
        [environment.APIEndPoint]: environment.clientId
      },
      navigateToLoginRequestUrl: false,
      cacheLocation: 'localStorage',

    }),
    ApiModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ContactComponent,
    LoginComponent,
    // AzureComponent,
  ],
  providers: [
    AuthenticationGuard,
    AuthService,
    TokenInterceptor,
    DashboardService,
    {
      provide: Configuration,
      useFactory: getConfig,
      deps: [AuthService],
      multi: false
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
