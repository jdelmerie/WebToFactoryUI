import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  error: string = "";
  myForm: FormGroup;
  todo: Todo = { id: 0, title: "", description: "", done: false }

  constructor(private formBuilder: FormBuilder, private store: Store, private router: Router) {
    this.myForm = this.formBuilder.group({
      id: [0, [Validators.required]],
      title: ['', [Validators.required]],
      description: ['', []],
    });
  }

  ngOnInit(): void {

  }

  saveTodo(myForm: FormGroup) {
    if (myForm.valid) {
      this.todo = { id: myForm.value.id, title: myForm.value.title, description: myForm.value.description, done: false };
      // this.store.dispatch(addNewTodo({ todo: { ...this.todo } }))
    } else {
      this.error = "Title is missing";
    }
  }
}
