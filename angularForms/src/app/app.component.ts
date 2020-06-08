import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FormGroup} from '@angular/forms'
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <h1 [ngStyle]="{color: 'brown' }">Angular Form & lazy loading!</h1>
    <hr />
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()"><br/>
    <mat-form-field>
    <mat-label>First Name</mat-label>
    <input matInput placeholder="you" formControlName="firstName"/> 
    
   </mat-form-field> <br/>
   
    <mat-form-field class="example-full-width">
      <mat-label>Last Name</mat-label>
      <input matInput placeholder="amele" value="" formControlName="lastName">
    </mat-form-field>
  <br/>
    <mat-form-field class="example-full-width">
      <mat-label>your  Message!</mat-label>
      <textarea matInput placeholder="We are The world!"  formControlName="message"></textarea>
    </mat-form-field> <br/>
    <button type="submit" mat-raised-button color="primary" >Submit</button> <br/>
  </form>
  <a [routerLink]="['child','form']">Registration</a> <br/>
    <a [routerLink]="['child', 'coursesList']">Show Courses</a>
    <router-outlet></router-outlet>
    <hr />
  `,
})
export class AppComponent {
 public myForm;
  
 //This FormBuilder provides a way to create a form
  constructor(private myFormBuilder: FormBuilder) { 
     this.myForm = myFormBuilder.group({
       firstName:[""],
       lastName:[""],
       message:['']
     })

  }
  onSubmit(){
    console.log(this.myForm.value);
  }
  
}

//(ngSubmit)="onSubmit()"