import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
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
  todos: todo[]
  message: string
  // =[
  //   new todo(1,'Learn to Dance',false, new Date()),
  //   new todo(2,'Become an expert at Angular',false, new Date()),
  //   new todo(3,'visit London',false, new Date())
  //   // {id:1, description:'Learn to dance'},
  //   // {id:2, description:'Become an expert at Angular'},
  //   // {id:3, description:'visit London'}
  // ]
// todo={
//   id: 1,
//   description: 'Learn to Dance'
// }
  constructor(
    private todoService:TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
   this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('karrybee').subscribe(
      response => {
        console.log(response);
        this.todos=response;
      }
    )
  }
  deleteTodo(id){
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('karrybee',id).subscribe(
      response=>{
        console.log(response);
        this.message=`Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }
  updateTodo(id){
    console.log(`update ${id}`)
    this.router.navigate(['todos',id])
  }

}
