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
import { HttpClientModule } from '@angular/common/http';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';

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
      tenant: 'investmenttracker.onmicrosoft.com',
      clientId: '27eefe55-baeb-4c65-bec7-67cf938cb30d',
      redirectUri: 'http://localhost:4200/admin/dashboard',
      postLogoutRedirectUri: 'http://localhost:4200/login',
      instance: 'https://login.microsoftonline.com/',
      endpoints: {
        'https://localhost:44327': '27eefe55-baeb-4c65-bec7-67cf938cb30d',
      },
      navigateToLoginRequestUrl: false,
      cacheLocation: 'localStorage',
    }),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ContactComponent,
    LoginComponent,
  ],
  providers: [AuthenticationGuard, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
