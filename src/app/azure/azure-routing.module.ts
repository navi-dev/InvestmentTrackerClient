import { Routes } from '@angular/router';
import { AzureComponent } from './azure.component';
import { BlobComponent } from './Blob/blob.component';


export const azureRoutes: Routes = [
  {
    path: '',
    component: AzureComponent,
  },
  {
    path: 'blob', component: BlobComponent,
  }
]
