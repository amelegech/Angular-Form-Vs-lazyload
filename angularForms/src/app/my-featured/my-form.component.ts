import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  template: `
    <h3 [ngStyle]="{ color: 'brown' }">WelCome To MIU!</h3>

    <hr />
    <form >
      <input />
      <button type="submit" mat-raised-button color="primary">Submit</button>
    </form>
    <button mat-raised-button color="primary" (click)="setValue()"></button>

    <hr />
  `,
})
export class MyFormComponent {
  public aForm;

  constructor(private formbulder: FormBuilder) {
    this.aForm = formbulder.group({
      firstName: ['amele'],
      lastName: ['cheklie'],
    });
  }

  onSubmit() {
    console.log(this.aForm.value);
  }
  setValue() {
    this.aForm.setValue({ name: 'amelework', lastName: 'Getnet' });
  }
}
/*
 <form [formGroup]="aForm" (ngSubmit)="onSubmit()"><br/>
  <input formControlName="name"/> <br/>
  <button type="submit" mat-raised-button color="primary" >Submit</button>
  </form>
 */
