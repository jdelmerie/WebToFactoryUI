import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';
import { addNewTodo, getTodoList } from 'src/app/ngrx/todo.actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

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

  resetForm() {
    this.myForm.reset();
  }

  saveTodo(myForm: FormGroup) {
    if (myForm.valid) {
      this.todo = { id: myForm.value.id, title: myForm.value.title, description: myForm.value.description, done: false };
      this.store.dispatch(addNewTodo({ todo: { ...this.todo } }))
    } else {
      this.error = "Title is missing";
    }
  }
}

