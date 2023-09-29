import { Component } from '@angular/core';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss']
})
export class UtilitiesComponent {
 // Define your properties


 constructor() {}

 // Implement your methods
 main() {
   // Get the values from your input fields
   const age = this.inAge;
   const height = this.inHeight;
   const weight = this.inWeight;
   // Validate inputs
   if (age && height && weight) {
     const bmi = this.calculateBMI(height, weight);
     const tdee = this.calculateTDEE(age, height, weight);

     this.render(bmi, tdee);
   } else {
     // Invalid inputs
     console.log("woops");
   }
 }

 calculateBMI(height: number, weight: number): number {
   const h = height / 100;
   const c = weight / (h * h);
   return Math.round(c * 100) / 100;
 }

 calculateTDEE(age: number, height: number, weight: number): number {
   const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
   switch (this.inActivity) {
     case 0:
       return Math.round(bmr * 1.2);
     case 1:
       return Math.round(bmr * 1.375);
     case 2:
       return Math.round(bmr * 1.55);
     case 3:
       return Math.round(bmr * 1.725);
     case 4:
       return Math.round(bmr * 1.9);
     default:
       return -1;
   }
 }

 render(bmi: number, tdee: number) {
   this.outBMI = bmi;
   this.outTDEE = tdee;
 }
 


}
