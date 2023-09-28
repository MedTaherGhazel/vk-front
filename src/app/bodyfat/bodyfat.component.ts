import { Component } from '@angular/core';

@Component({
  selector: 'app-bodyfat',
  templateUrl: './bodyfat.component.html',
  styleUrls: ['./bodyfat.component.scss']
})
export class BodyfatComponent {
calculBodyFat(weight:any,height:any ,age:any,gender:any){
  console.log('weight', weight)
  console.log('height', height)
  console.log('age', age)
  const selectedGender = gender.querySelector('input[name="hopping"]:checked').value;
  console.log(selectedGender)
  if (selectedGender=='w'){
    console.log('for womens', 9.740*weight + 172.9*height - 4.737*age + 667.051);

  }else{
    console.log('for mens', 13.707*weight + 492.3*height - 6.673*age + 77.607);
  }
}
}
