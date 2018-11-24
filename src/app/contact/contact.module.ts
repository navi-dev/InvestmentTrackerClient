import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { PresentationComponent } from './presentation/presentation.component';
import { RouterModule } from '@angular/router';
import { contactRoutes } from './contact-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(contactRoutes),
  ],
  declarations: [
    ListComponent,
    AddComponent,
    EditComponent,
    PresentationComponent,
  ],
})

export class ContactModule {

}
