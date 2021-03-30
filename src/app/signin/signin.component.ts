import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Signin } from './signin';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  signin = new Signin();

  save(signinForm:NgForm){
    alert("Form submitted..");
    alert("Click Test Button to take the test now.");
  
  }


}
