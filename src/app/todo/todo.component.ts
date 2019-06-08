import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number
  todo: todo

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.todo=new todo(this.id,'',false,new Date());
    if(this.id!=-1){
    this.todoService.retrieveTodo('karrybee',this.id).subscribe(
data => this.todo =data
    )
    }
  }
  saveTodo(){
    if(this.id===-1){
//createtodo
this.todoService.createTodo('karrybee',this.todo).subscribe(
  data=>{
    console.log(data)
    this.router.navigate(['todos'])
  }
)
    }else{
    this.todoService.updateTodo('karrybee',this.id,this.todo).subscribe(
      data=>{
        console.log(data)
      this.router.navigate(['todos'])}
    )
  }}
  
}