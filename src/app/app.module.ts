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

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    MsAdalAngular6Module.forRoot({
      tenant: 'investmenttracker.onmicrosoft.com',
      clientId: '81d35d95-a761-48ee-a2d0-3c84120f79b0',
      redirectUri: 'http://localhost:4200/dashboard',
      endpoints: {
        'https://investmenttracker.onmicrosoft.com/investmenttrackerapi': 'eda8f603-c9fc-452d-b660-a331403d5154'
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
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
