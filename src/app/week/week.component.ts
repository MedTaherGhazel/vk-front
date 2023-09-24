import { Component, Input, inject } from '@angular/core';
import { Week } from '../week';
import { WeekService } from '../week.service';
import { DayService } from '../day.service';
import { ActivatedRoute } from '@angular/router';
import { Day } from '../day';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent {
  @Input() week: Week | undefined;
  @Input() weekId: number;
  route: ActivatedRoute = inject(ActivatedRoute);

  WeekList: Week[] = [];
  DayService: DayService = inject(DayService);
  weekService: WeekService =inject(WeekService);
  days : Day[] = [];
  constructor(private dayService: DayService) {
    this.weekId = Number(this.route.snapshot.params['id']);
    console.log(this.weekId)
    this.week = this.weekService.getWeekById(this.weekId);
    console.log(this.weekId)
  }

  ngOnInit(): void {
    if (this.weekId !== undefined) {
      this.fetchDaysByWeekId(this.weekId);
    }
  }

  fetchDaysByWeekId(weekId: number): void {
    this.dayService.getDaysByWeekId(weekId).subscribe((days) => {
      this.days = days;
      console.log(days)
    });
  }
}
