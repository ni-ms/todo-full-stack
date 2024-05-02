import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Todo} from "../../models/todo";
import {TodoDataService} from "../../services/data/todo-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    NgIf
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  todo: Todo = {} as Todo;
  id: number = 0;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());
    if (this.id != -1) {
      this.todoService.retrieveTodo('TestUser', this.id).subscribe(
        {
          next: value => this.todo = value as Todo
        }
      )
    }
  }


  saveTodo() {
    if (this.id === -1) {
      //Create Todo
      this.todoService.createTodo('TestUser', this.todo).subscribe({
        next: () => {
          console.log(this.todo);
          this.router.navigate(['todos']);
        }
      })
    } else {
      this.todoService.updateTodo('TestUser', this.id, this.todo).subscribe({
        next: () => {
          console.log(this.todo);
          this.router.navigate(['todos']);
        }
      })
    }
  }
}
