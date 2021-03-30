import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Userlogin } from './userlogin';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  userlogin = new Userlogin();

  save(userloginForm:NgForm){
    alert("Registered..");
    alert("Click Test Button to take the test now.");
  
  }
  
  
  }
