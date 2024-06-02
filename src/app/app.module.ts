import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';


import { RouterModule } from '@angular/router';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { FeedbacksPageComponent } from './feedbacks-page/feedbacks-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ResumePageComponent,
    ContactsPageComponent,
    FeedbacksPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
      { path: 'landing-page', component: LandingPageComponent },
      { path: 'resume-page', component: ResumePageComponent },
      { path: 'contact-page', component: ContactsPageComponent },
      { path: 'feedback-page', component: FeedbacksPageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
