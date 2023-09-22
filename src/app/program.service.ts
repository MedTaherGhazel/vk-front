import { Injectable } from '@angular/core';
import { Program } from './program';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  programList: Program[] = [
    {
    id: 1,
    name: 'lose weight ',
    description: 'this program is for beginner',
    photo: '3.jpg'
  },
  {
    id: 2,
    name: 'gain weight ',
    description: 'this program is for beginner',
    photo: '3.jpg'
  },
  {
    id: 3,
    name: 'home workout',
    description: 'training at home',
    photo: '2.jpg',
  }
];

  constructor() { }
  getAllPrograms(): Program[] {
    return this.programList;
  }

  getProgramById(id: number): Program | undefined {
    return this.programList.find(program => program.id === id);
  }
}
