import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { getTodoList, initAction, updateTodo } from 'src/app/ngrx/todo.actions';
import { getAllTodos, getAppName, getError } from 'src/app/ngrx/todo.selectors';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  title$: Observable<string> | undefined = this.store.select(getAppName);
  todos$: Observable<Todo[]> = this.store.select(getAllTodos);
  error$: Observable<String> = this.store.select(getError);

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(initAction());
    this.store.dispatch(getTodoList());
  }

  onCheckboxChange(event: any, todo: Todo) {
    this.store.dispatch(updateTodo({ updateTodo: todo }))
  }

}
