import { Component, Input, inject } from '@angular/core';
import { Day } from '../day';
import { ActivatedRoute } from '@angular/router';
import { DayService } from '../day.service';
import { WeekService } from '../week.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent {
  @Input() day!: Day;
  @Input() days: Day[] = [];


  route: ActivatedRoute = inject(ActivatedRoute);
  constructor() {}

}
