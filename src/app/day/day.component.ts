import { Component, Input, inject } from '@angular/core';
import { Day } from '../day';
import { ActivatedRoute } from '@angular/router';
import { DayService } from '../day.service';
import { WeekService } from '../week.service';
import { ExerciseService } from '../exercise.service';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent {
  @Input() day!: Day;
  @Input() days: Day[] = [];

  exercises :Exercise[] =[];

  getExercises(id :number){
    this.exerciseService.getExercisesByDayId(id).subscribe((exercises)=>{
      this.exercises=exercises
    });
  }
  constructor(private exerciseService :ExerciseService) {}

}
