import { Component, OnInit } from '@angular/core';
export class todo{
  constructor(
    public id: number,
    public description: string,
    public done:boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos=[
    new todo(1,'Learn to Dance',false, new Date()),
    new todo(2,'Become an expert at Angular',false, new Date()),
    new todo(3,'visit London',false, new Date())
    // {id:1, description:'Learn to dance'},
    // {id:2, description:'Become an expert at Angular'},
    // {id:3, description:'visit London'}
  ]
// todo={
//   id: 1,
//   description: 'Learn to Dance'
// }
  constructor() { }

  ngOnInit() {
  }

}
