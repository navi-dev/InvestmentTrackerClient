import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from 'microsoft-adal-angular6';


const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children:
      [
        {
          path: '',
          loadChildren: 'app/layouts/admin-layout/admin-layout.module#AdminLayoutModule',
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
        loadChildren: './contact/contact.module#ContactModule',
      }
    ]
  },
  {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full',
  },
  // {
  //   path: '**',
  //   redirectTo: 'Login'
  // }
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
