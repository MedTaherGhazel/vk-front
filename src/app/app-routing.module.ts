import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProgramsComponent } from './programs/programs.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProgramDetailComponent } from './program-detail/program-detail.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'programs',component:ProgramsComponent },
{path:'program-detail/:name/:id',component:ProgramDetailComponent },
{path:'feedback',component:FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
