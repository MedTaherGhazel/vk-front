import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramService } from '../program.service';
import { Program } from '../program';
import { WeekService } from '../week.service';
import { Week } from '../week';

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.scss']
})
export class ProgramDetailComponent {
  @Input() week!: Week;
  route: ActivatedRoute = inject(ActivatedRoute);
  prgramService = inject(ProgramService);
  program: Program | undefined;

  constructor() {
    const programId = Number(this.route.snapshot.params['id']);
    this.program = this.prgramService.getProgramById(programId);
  }
  WeekList: Week[] = [];
  WeekService: WeekService = inject(WeekService);
  fetchWeekList(): void {
    this.WeekService.getWeekList().subscribe((weeks) => {
      this.WeekList = weeks;
      console.log(weeks)
    });
    console.log(this.WeekList)
}
}
