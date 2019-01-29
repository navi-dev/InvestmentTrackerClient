import { Injectable } from '@angular/core';
import { Contact } from '../model/contact.model';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable()
export class ContactService {

  constructor(private httpClient: HttpClient) {

  }

  addContact(contact: Contact) {
    const formData = new FormData();
    if (contact.profile) {
      formData.append('profile', contact.profile, contact.profile.name);
      formData.append('name', contact.firstName + contact.lastName);
      formData.append('address', contact.address);
      formData.append('contactType', contact.contactType.toString());
      formData.append('mobile', contact.phone);
      formData.append('compnay', contact.compnay);
      formData.append('description', contact.description);
    }

    this.httpClient.post(environment.APIEndPoint + 'api/contacts/create', formData).subscribe(elem => {
      debugger;
    });
  }
}

