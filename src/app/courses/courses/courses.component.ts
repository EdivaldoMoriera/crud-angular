import { Component, OnInit } from '@angular/core';

import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  course:Course[] = [
    {_id: '1' , name:'Angular', category: 'font-end'},
    { _id: '2', name: 'Spring', category: 'backend'},
    {_id: '3' , name:'React', category: 'font-end'},
    { _id: '4', name: 'Nodejs', category: 'backend'},
    {_id: '5' , name:'Vue', category: 'font-end'},
    { _id: '6', name: 'JavaScript', category: 'backend'}
  ];
  displayedColumns = ['name' , 'category'];

  constructor() {

   }

  ngOnInit(): void {
  }

}
