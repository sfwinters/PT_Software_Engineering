import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AvgRatingComponent } from './avg-rating/avg-rating.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ReviewsComponent,
    AvgRatingComponent,
    VisitorsComponent,
    SentimentAnalysisComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
