import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { ProgramsComponent } from './home/programs/programs.component';
import { ProgramDetailComponent } from './program-detail/program-detail.component';
import { HomeComponent } from './home/home.component';
import { SuccessStoriesComponent } from './home/success-stories/success-stories.component';
import { UtilitiesComponent } from './utilities/utilities.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'programs',component:ProgramsComponent },
{path:'program-detail/:name/:id',component:ProgramDetailComponent },
{path:'success-story',component:SuccessStoriesComponent},
{path:'utilities',component:UtilitiesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
