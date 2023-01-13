import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private http: HttpClient) { }

  /**
   * Get all todos
   */
  public getTodoList() {
    return this.http.get<Todo[]>(environment.host + '/todos');
  }

  /**
   * Update todo state
   */
  public updateTodoState(todo: Todo) {
    return this.http.put<Todo>(environment.host + '/updateTodoState/' + todo.id, todo);
  }

}
