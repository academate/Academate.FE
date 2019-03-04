import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursesComponent } from './components/courses/courses.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { SharedModule } from '../shared/shared.module';
import { MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CourseItemComponent, CoursesListComponent, CoursesComponent],
  imports: [
    CommonModule,
    HttpClientModule,

    ReactiveFormsModule,
    MatExpansionModule,
    MatSelectModule,
    SharedModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class MyCoursesModule { }
