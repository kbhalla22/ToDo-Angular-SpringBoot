import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos=[
    {id:1, description:'Learn to dance'},
    {id:2, description:'Become an expert at Angular'},
    {id:3, description:'visit London'}
  ]
// todo={
//   id: 1,
//   description: 'Learn to Dance'
// }
  constructor() { }

  ngOnInit() {
  }

}
