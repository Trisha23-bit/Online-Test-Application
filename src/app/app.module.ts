import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizCComponent } from './quiz-c/quiz-c.component';
import { HomeqComponent } from './homeq/homeq.component';
import { SigninComponent } from './signin/signin.component';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { Test1Component } from './test1/test1.component';

import { QuestionComponent } from './question/question.component';
import { ReviewComponent } from './review/review.component';
import { FrontpComponent } from './frontp/frontp.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizCComponent,
    HomeqComponent,
    SigninComponent,
    TermsandconditionComponent,
    ContactusComponent,
    AboutusComponent,
    UserloginComponent,
    Test1Component,
    QuestionComponent,
    ReviewComponent,
    FrontpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
