import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contactus } from './contactus';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

contactus = new Contactus();

save(contactusForm:NgForm){
  alert("Form submitted..");

}


}


