import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from 'microsoft-adal-angular6';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { ContactModule } from './contact/contact.module';
import { AzureComponent } from './azure/azure.component';
import { AzureModule } from './azure/azure.module';
// import { AzureModule } from './azure/azure.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'azure',
    // component: AzureComponent,
    children: [
      {
        path: '',
        loadChildren: () => AzureModule,
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children:
      [
        {
          path: '',
          loadChildren: () => AdminLayoutModule,
        }
      ],
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'contact',
    component: ContactComponent,
    children: [
      {
        path: '',
        loadChildren: () => ContactModule,
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
