import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramService } from '../program.service';
import { Program } from '../program';

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.scss']
})
export class ProgramDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  prgramService = inject(ProgramService);
  program: Program | undefined;

  constructor() {
    const programId = Number(this.route.snapshot.params['id']);
    this.program = this.prgramService.getProgramById(programId);
  }
}
