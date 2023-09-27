import { Injectable } from '@angular/core';
import { Day } from './day';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DayService {
  dayList: Day[] = [
    {
    id: 1,
    name: 'monday',
    description: 'first day first week',
    url:"",
    id_week:1
  },
  {
    id: 2,
    name: 'tuesday',
    description: 'second day',
    url:"",
    id_week:1
  },
  {
    id: 3,
    name: 'monday',
    description: 'first day',
    url:"",
    id_week:2
  },
  {
    id: 4,
    name: 'monday ',
    description: 'first day',
    url:"",
    id_week:4
  }
];
  constructor() { }
  getDaysByWeekId(week_id: number | undefined): Observable<Day[]> {
    const filteredDays = this.dayList.filter((day) => day.id_week === week_id);
    // console.log(filteredDays)
    // console.log(typeof(week_id))
    return of(filteredDays);
  }
}
