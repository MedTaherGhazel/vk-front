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
import { DayComponent } from './day/day.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { BodyfatComponent } from './bodyfat/bodyfat.component';
import { AboutComponent } from './about/about.component';
import { BodyfatModalComponent } from './bodyfat-modal/bodyfat-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UtilitiesComponent } from './utilities/utilities.component';
import { TopbodyComponent } from './topbody/topbody.component';
import { SponsorsComponent } from './sponsors/sponsors.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgramsComponent,
    ProgramComponent,
    ProgramDetailComponent,
    NavbarComponent,
    HomeComponent,
    SuccessStoriesComponent,
    WeekComponent,
    DayComponent,
    ExerciseComponent,
    BodyfatComponent,
    AboutComponent,
    BodyfatModalComponent,
    UtilitiesComponent,
    TopbodyComponent,
    SponsorsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
