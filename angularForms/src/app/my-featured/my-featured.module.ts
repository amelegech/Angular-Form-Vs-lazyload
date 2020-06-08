import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubComponent } from './sub.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations:[
    SubComponent
  ],

  imports: [
    CommonModule, RouterModule.forChild([{path: 'coursesList', component:SubComponent}])
  ],
  exports : [ SubComponent ]
})
export class MyFeaturedModule { }
