import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { PresentationComponent } from './presentation/presentation.component';
import { RouterModule } from '@angular/router';
import { contactRoutes } from './contact-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './shared/services/contact.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(contactRoutes),
    ReactiveFormsModule,
  ],
  declarations: [
    ListComponent,
    AddComponent,
    EditComponent,
    PresentationComponent,
  ],
  providers: [
    ContactService,
  ]
})

export class ContactModule {

}
