import { Component } from '@angular/core';
import { Program } from '../program';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  pogram: Program = {
    id: 9999,
    name: 'Program for beginner',
    description: '${this.baseUrl}/example-house.jpg',
    photo: '${this.baseUrl}/example-house.jpg'
  };
}
