import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../shared/services/contact.service';
import { Contact } from '../shared/model/contact.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  contactForm: FormGroup;
  contact: Contact;
  constructor(private formbuilder: FormBuilder,
    private contactService: ContactService) { }

  ngOnInit() {
    this.contact = new Contact();
    this.initializeForm();
  }

  initializeForm() {
    this.contactForm = this.formbuilder.group({
      firstName: [this.contact.firstName, Validators.required],
      lastName: [this.contact.lastName],
      address: [this.contact.address],
      compnay: [this.contact.compnay],
      contactType: [this.contact.contactType],
      description: [this.contact.description],
      phone: [this.contact.phone],
      profile: [this.contact.profile]
    });
  }

  changeFile(files: FileList) {
    const file = files.item(0);
    if (file) {
      console.log(file.name);
      console.log(file.type);
    }
    this.contact.profile = file;
  }

  save() {
    const file = this.contact.profile;
    this.contact = this.contactForm.value as Contact;
    this.contact.profile = file;
    this.contactService.addContact(this.contact);
  }
}
