import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';


import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ResumePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
      { path: 'landing-page', component: LandingPageComponent },
      { path: 'resume-page', component: ResumePageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
