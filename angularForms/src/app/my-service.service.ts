import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
public courseList =['Angular','React','NodeJs']
  constructor() { }
  getList(){
    return of(this.courseList)

  }
}
