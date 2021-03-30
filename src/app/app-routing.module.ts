import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizCComponent } from './quiz-c/quiz-c.component';
import { HomeqComponent } from './homeq/homeq.component';
import { SigninComponent } from './signin/signin.component';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { Test1Component } from './test1/test1.component';
import { ReviewComponent } from './review/review.component';
import { FrontpComponent } from './frontp/frontp.component';

const routes: Routes = [
  {path: '',component: FrontpComponent},
  {path: 'homeq',component: HomeqComponent},
  {path: 'userlogin' ,component: UserloginComponent},
  {path: 'signin',component: SigninComponent},
  {path: 'termsandcondition',component: TermsandconditionComponent},
  {path: 'contactus',component: ContactusComponent},
  {path: 'aboutus' ,component: AboutusComponent},
  {path: 'submit' ,component: QuizCComponent},
  {path: 'test1' ,component: Test1Component},
  {path: 'review' ,component: ReviewComponent},
  {path: 'frontp' ,component: FrontpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
