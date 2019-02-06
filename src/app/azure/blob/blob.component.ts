import { Component, OnInit } from '@angular/core';
import { AzureServices } from '../shared/services/azure.service';

@Component({
    selector: 'app-blob',
    templateUrl: './blob.component.html'
})

export class BlobComponent implements OnInit {
    file: File;
    uploadedFiles: Array<string>;

    constructor(private _azureService: AzureServices) {

    }

    ngOnInit() {
        this.getImages();
    }

    changeFile(files: FileList) {
        const file = files.item(0);
        if (file) {
            console.log(file.name);
            console.log(file.type);

            this.file = file;
        }
    }

    getImages() {
        this._azureService.getUploadedData().subscribe(elem => {
            debugger;
            this.uploadedFiles = elem
        });
    }

    uploadFile() {
        this._azureService.uploadBlob(this.file).subscribe(elem => {
            if (elem) {
                this.getImages();
            };
        });
    }
}
