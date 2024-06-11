import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';


import { RouterModule } from '@angular/router';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { FeedbacksPageComponent } from './feedbacks-page/feedbacks-page.component';


import { FusionChartsModule } from "angular-fusioncharts";

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { NoticePeriodChartDoughnut2DComponent } from './helper-charts/notice-period-chart-doughnut-2-d/notice-period-chart-doughnut-2-d.component';
import { WorkExpChartDoughnut2DComponent } from './helper-charts/work-exp-chart-doughnut-2-d/work-exp-chart-doughnut-2-d.component';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ResumePageComponent,
    ContactsPageComponent,
    FeedbacksPageComponent,
    NoticePeriodChartDoughnut2DComponent,
    WorkExpChartDoughnut2DComponent
  ],
  imports: [
    BrowserModule,
    FusionChartsModule,
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
