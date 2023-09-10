import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramComponent } from '../program/program.component';
import { Program } from '../program';
import { ProgramService } from '../program.service';
@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
})
export class ProgramsComponent {
  // @Input() programm!: Program;

  ProgramList: Program[] = [];
  programService: ProgramService = inject(ProgramService);
  filteredProgramList: Program[];

  constructor() {
    this.ProgramList = this.programService.getAllPrograms();
    this.filteredProgramList = this.ProgramList;
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredProgramList = this.ProgramList;
    }

    this.filteredProgramList = this.ProgramList.filter(
      program => program?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
