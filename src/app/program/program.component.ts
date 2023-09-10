import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Program } from '../program';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent {
  @Input() program!: Program;
  constructor(private route:ActivatedRoute) {
    this.route.queryParams.subscribe(data=>{
      console.log(data['name'])
      console.log(data['id'])
  })
  }
}
