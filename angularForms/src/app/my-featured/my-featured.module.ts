import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubComponent } from './sub.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MyFormComponent } from './my-form.component';





@NgModule({
  declarations:[
    SubComponent,
    MyFormComponent
  ],

  imports: [
   CommonModule, 
   MatButtonModule, 
   FormsModule,
   RouterModule.forChild([
     {path: 'coursesList', component:SubComponent},
     {path: 'form', component:MyFormComponent}
    ])
  ],
  exports : [ SubComponent,MyFormComponent ]
})
export class MyFeaturedModule { }
