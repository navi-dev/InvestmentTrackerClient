import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/Observable';
import { BlobService } from '../../../../../node_modules/@navi-dev/api/blob.service';

@Injectable()
export class AzureServices {
  uploadBlobUrl = environment.APIEndPoint + 'api/blob/upload';

  constructor(private httpClient: HttpClient,
    private _blobService: BlobService) {

  }

  uploadBlob(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.httpClient.post(this.uploadBlobUrl, formData)
  }

  getUploadedData(): Observable<Array<string>> {
    return this._blobService.get();
  }
}
