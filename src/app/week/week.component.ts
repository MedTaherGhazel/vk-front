import { Component, Input, inject } from '@angular/core';
import { Week } from '../week';
import { WeekService } from '../week.service';
import { DayService } from '../day.service';
import { Day } from '../day';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent {
  @Input() week: Week | undefined;
  @Input() weekId: number=0;

  WeekList: Week[] = [];
  days: Day[] = [];
  route: ActivatedRoute = inject(ActivatedRoute);
  id: number | undefined;


  getDays(id: number){
      this.weekId = id;
      this.dayService.getDaysByWeekId(id).subscribe((days) => {
        this.days = days;
        console.log('days',days)
      });
  }
  constructor(private dayService: DayService, private weekService: WeekService) {
  }


}
