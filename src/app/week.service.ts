import { Injectable } from '@angular/core';
import { Week } from './week';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeekService {
  weekList: Week[] = [
    {
    id: 1,
    name: 'week 1 ',
    description: 'first week',
    id_program:1
  },
  {
    id: 2,
    name: 'week 2 ',
    description: 'second week',
    id_program:1
  },
  {
    id: 3,
    name: 'week 1',
    description: '1111111111111111',
    id_program:2
  },
  {
    id: 3,
    name: 'week 1',
    description: '1111111111111111',
    id_program:3
  }
];


constructor() {}

 getWeeksByProgramId(program_id: number): Observable<Week[]> {
    const filteredWeeks = this.weekList.filter((week) => week.id_program === program_id);
    console.log(filteredWeeks)
    console.log(program_id)
    return of(filteredWeeks);
  }
}
