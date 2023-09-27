import { Injectable } from '@angular/core';
import { Exercise } from './exercise';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  exerciseList: Exercise[] = [
    {
    id: 1,
    name: 'push up',
    description: 'chest exercise',
    url:"../../assets/exercises/jambe.mp4",
    id_day:1
  },
  {
    id: 2,
    name: 'pull up',
    description: 'chest exercise',
    url:"",
    id_day:1
  },
  {
    id: 3,
    name: 'dumble ex',
    description: 'tricep',
    url:"",
    id_day:2
  },
  {
    id: 4,
    name: 'barfix',
    description: 'tricep',
    url:"",
    id_day:2
  }
];
  constructor() { }
  getExercisesByDayId(day_id: number | undefined): Observable<Exercise[]> {
    const filteredExercises = this.exerciseList.filter((exercise) => exercise.id_day === day_id);
    // console.log(filteredDays)
    // console.log(typeof(week_id))
    return of(filteredExercises);
  }
}
