import { Component, Input, inject } from '@angular/core';
import { Week } from '../week';
import { WeekService } from '../week.service';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent {
  @Input() week!: Week;
  WeekList: Week[] = [];
  WeekService: WeekService = inject(WeekService);
}
