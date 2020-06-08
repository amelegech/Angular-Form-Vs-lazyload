import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <h1 [ngStyle]="{color: 'brown' }">Angular Form & lazy loading!</h1>
    <hr />
    <form >
    <mat-form-field class="example-full-width">
      <mat-label>Your Name</mat-label>
      <input matInput placeholder="amele" value="" #i (click)="inputHandler(i)">
    </mat-form-field>
  <br/>
    <mat-form-field class="example-full-width">
      <mat-label>your Message Message!</mat-label>
      <textarea matInput placeholder="We are The world!"></textarea>
    </mat-form-field>
  </form>
    <a [routerLink]="['', 'coursesList']">Show Courses</a>
    <router-outlet></router-outlet>
    <hr />
  `,
})
export class AppComponent {
 //public myForm;
  // create a form by FormBuilder
  // constructor(private myFormBuilder: FormBuilder) {}
  inputHandler(val) {
    console.log(val.value);
  }
}

