import { Component } from '@angular/core';
import { BodyfatModalComponent } from '../bodyfat-modal/bodyfat-modal.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-bodyfat',
  templateUrl: './bodyfat.component.html',
  styleUrls: ['./bodyfat.component.scss']
})
export class BodyfatComponent {

calculBodyFat(weight:any,height:any ,age:any,gender:any){
  const selectedGender = gender.querySelector('input[name="hopping"]:checked').value;
  let res:string

  if (selectedGender=='w'){//women
    res=("you(w) need "+ String(9.740*weight + 172.9*height - 4.737*age + 667.051)+'calories per day');
    this.openModal(res);
    return res
  }else{
    res=('you(m) need'+String(13.707*weight + 492.3*height - 6.673*age + 77.607)+'calories per day');
    console.log(res)
    this.openModal(res);
    return res
  }

}
openModal(result: string) {
  const dialogRef = this.dialog.open(BodyfatModalComponent, {
    data: { result }, // Pass the result to the modal
    width: '4000px' // Set the width of your modal
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The modal was closed');
  });
}

constructor(private dialog: MatDialog) { }

}
