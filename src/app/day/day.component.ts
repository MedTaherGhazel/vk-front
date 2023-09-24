import { Component, Input } from '@angular/core';
import { Day } from '../day';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent {
  @Input() day!: Day;
}
