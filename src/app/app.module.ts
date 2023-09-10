import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgramsComponent } from './programs/programs.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProgramComponent } from './program/program.component';
import { ProgramDetailComponent } from './program-detail/program-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ProgramsComponent,
    HomeComponent,
    CarouselComponent,
    FeedbackComponent,
    ProgramComponent,
    ProgramDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
