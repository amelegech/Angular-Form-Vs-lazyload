import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-sub',
  template: `
  <h3 [ngStyle]="{'color':'brown'}">Cours List!</h3>
  <hr/>
<p *ngFor="let list of listOfCourses | async" [ngStyle]="{'color':'red','background-color':'skyblue'}">{{list}}</p>
  <hr/>
  `,
})

export class SubComponent implements OnInit {
 public listOfCourses;


  constructor(private service: MyServiceService) {

  }
  ngOnInit(): void {
    this.listOfCourses = this.service.getList();
  }
}
