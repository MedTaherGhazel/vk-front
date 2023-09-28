import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-bodyfat-modal',
  templateUrl: './bodyfat-modal.component.html',
  styleUrls: ['./bodyfat-modal.component.scss']
})
export class BodyfatModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
