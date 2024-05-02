import {Component, OnInit} from '@angular/core';
import {Todo} from "../../models/todo";
import {CommonModule} from "@angular/common";
import {TodoDataService} from "../../services/data/todo-data.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] | undefined;
  message: string | undefined;

  constructor(
    private todoDataService: TodoDataService,
    private router: Router
  ) {
  }

  ngOnInit() {

    this.todoDataService.retrieveAllTodos('TestUser').subscribe(
      response => {
        this.todos = response;
      }
    );

  }

// todos = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Learn to Sing', false, new Date()),
  //   new Todo(3, 'Learn to Code', false, new Date()),
  // ]
  deleteTodo(id: number) {
    console.log("Delete" + id);
    this.todoDataService.deleteTodo('TestUser', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.ngOnInit();
      }
    );
  }

  updateTodo(id: number) {
    console.log('id' + id);
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }
}

