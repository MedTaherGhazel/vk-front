import { Injectable } from '@angular/core';
import { Program } from './program';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  programList: Program[] = [{
    id: 9999,
    name: 'aa',
    description: 'this program is for beginner',
    photo: '${this.baseUrl}/example-house.jpg'
  },
  {
    id: 99,
    name: 'bb',
    description: 'aaaaaaaaaaaaaaaaaaa',
    photo: '${this.baseUrl}/example-house.jpg'
  }];

  constructor() { }
  getAllPrograms(): Program[] {
    return this.programList;
  }

  getProgramById(id: number): Program | undefined {
    return this.programList.find(program => program.id === id);
  }
}
