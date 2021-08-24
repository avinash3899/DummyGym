import { Component, OnInit } from '@angular/core';
import { GymserviceService, } from '../gymservice.service';
import { Contact } from '../contact';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  message!: string;
  contact!: Contact;
  constructor(private service: GymserviceService) { }

  ngOnInit(): void {
    this.contact = new Contact();
    this.contact.name = "Name";
    this.contact.email = "Email";
    this.contact.messageType = "Subject";
    this.contact.message = "Message:";
  }

  sendMessage() {
    this.service.sendMessage(this.contact).subscribe(
      data => {
        this.message = data;
        console.log(data);
        this.contact.name = "Name";
        this.contact.email = "Email";
        this.contact.messageType = "Subject";
        this.contact.message = "Message:";
      },
      error => {
        console.log(error);
        this.contact.name = "Name";
        this.contact.email = "Email";
        this.contact.messageType = "Subject";
        this.contact.message = "Message:";
      }
    )
  }

}
