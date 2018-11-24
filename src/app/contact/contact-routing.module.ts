import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';


export const contactRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', redirectTo: 'contact-list'
      },
      {
        path: 'contact-list', component: ListComponent,
      },
      {
        path: 'contact-add', component: AddComponent,
      },
      {
        path: 'contact-edit', component: EditComponent,
      },
    ]
  }
];

