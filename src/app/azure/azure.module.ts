import { NgModule } from '@angular/core';
import { AzureComponent } from './azure.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { azureRoutes } from './azure-routing.module';
import { BlobComponent } from './Blob/blob.component';
import { ComponentsModule } from 'app/components/components.module';
import { AzureServices } from './shared/services/azure.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(azureRoutes),
    ComponentsModule,
  ],
  declarations: [
    BlobComponent,
    AzureComponent,
  ],
  providers: [
    AzureServices,
  ],
})

export class AzureModule {

}
