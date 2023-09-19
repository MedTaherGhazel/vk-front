import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-success-stories',
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.scss']
})
export class SuccessStoriesComponent {
  photos: string[] = ['2.jpg','3.jpg','4.jpg','5.jpg'];

  constructor(private http: HttpClient) { }
  }

