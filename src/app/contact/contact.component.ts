import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../../node_modules/@navi-dev/api-investmenttracker/api/contacts.service'
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  constructor(private contactApi: ContactsService, private adal: MsAdalAngular6Service) { }

  ngOnInit() {
    this.contactApi.get().subscribe(elem => {
      console.log(elem);
    }, (error) => {
      console.log(error);
    })
  }

}
