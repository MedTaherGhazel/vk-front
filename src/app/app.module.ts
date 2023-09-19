import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgramsComponent } from './home/programs/programs.component';
import { ProgramComponent } from './program/program.component';
import { ProgramDetailComponent } from './program-detail/program-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SuccessStoriesComponent } from './home/success-stories/success-stories.component';
import { HttpClientModule } from '@angular/common/http';
import { WeekComponent } from './week/week.component';


@NgModule({
  declarations: [
    AppComponent,
    ProgramsComponent,
    ProgramComponent,
    ProgramDetailComponent,
    NavbarComponent,
    HomeComponent,
    SuccessStoriesComponent,
    WeekComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
