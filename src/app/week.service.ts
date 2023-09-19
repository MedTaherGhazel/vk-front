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
    name: 'lose weight ',
    description: 'this program is for beginner',
    id_program:1
  },
  {
    id: 2,
    name: 'lose weight ',
    description: 'this program is for beginner',
    id_program:1
  },
  {
    id: 3,
    name: 'home workout',
    description: 'training at home',
    id_program:2
  }
];
programIdToFilter = 1;
filteredWeeks: Week[];

constructor() {
  this.filteredWeeks = this.filterWeeksByProgramId(this.weekList, this.programIdToFilter);
}
getWeekList(): Week[] {
  // Replace with actual data retrieval logic if needed
  return this.weekList;
}
filterWeeksByProgramId(weeks: Week[], programId: number): Week[] {
  return weeks.filter((week) => week.id_program === programId);
}
}
