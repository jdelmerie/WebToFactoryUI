import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import * as TodosAction from "src/app/ngrx/todo.actions";
import * as TodosSelectors from 'src/app/ngrx/todo.selectors';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  error$: Observable<String> = this.store.select(TodosSelectors.getError);
  checkedTodos$: Observable<Todo[]> = this.store.select(TodosSelectors.getTodosDone);
  unCheckedTodos$: Observable<Todo[]> = this.store.select(TodosSelectors.getTodosUnDone);
  myForm: FormGroup;
  error!: string;
  lastId: number = 0;

  constructor(private store: Store,
    private formBuilder: FormBuilder,) {
    this.myForm = this.formBuilder.group({
      title: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.store.dispatch(TodosAction.initAction());
    this.store.dispatch(TodosAction.GetTodos.do());
  }

  onCheckboxChange(event: any, t: Todo) {
    let todo = { ...t };
    todo = { ...todo, done: !todo.done };
    this.store.dispatch(TodosAction.UpdateTodo.do({ todo }));
    this.store.dispatch(TodosAction.GetTodos.do());
  }

  saveTodo(myForm: FormGroup) {
    if (myForm.valid) {
      this.store.select(TodosSelectors.getAllTodosSize).subscribe(size => this.lastId = size)
      const todo: Todo = { id: this.lastId, title: myForm.value.title, description: "", done: false };
      this.store.dispatch(TodosAction.AddTodo.do({ todo }));
      this.store.dispatch(TodosAction.GetTodos.do());
      myForm.reset();
    } else {
      this.error = "Please enter the title";
    }
  }
}
