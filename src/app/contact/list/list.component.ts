import { Component, OnInit } from '@angular/core';
import { ContactsService } from '@navi-dev/api/contacts.service';
import { ContactDto } from '@navi-dev/model/contactDto';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  contacts: Array<ContactDto> = [];
  constructor(private contactApi: ContactsService) { }

  ngOnInit() {
    this.contactApi.get().subscribe(elem => {
      if (elem) {
        this.contacts = elem;
      }
    }, (error) => {
      console.log(error);
    })
  }
}
