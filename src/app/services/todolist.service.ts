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
    // return this.http.get<Todo[]>(environment.hostApi + '/todos');
    return this.http.get<Todo[]>(environment.hostMockedBackend + '/todos');
  }

  /**
   * Update todo state
   */
  public updateTodoState(todo: Todo) {
    return this.http.put<Todo>(environment.hostMockedBackend + '/todos/' + todo.id, todo);
    // return this.http.put<Todo>(environment.hostApi + '/updateTodoState/' + todo.id, todo);
  }

  /**
   * Add new todo
   */
  public addNewTodo(todo: Todo) {
    // return this.http.post<Todo>(environment.hostApi + '/addNewTodo/', todo);
    return this.http.post<Todo>(environment.hostMockedBackend + '/todos/', todo);
  }

  /**
  * Add new todo
  */
  public deleteTodo(todoId: number) {
    // return this.http.delete<Todo>(environment.hostApi + '/deleteTodo/' + todoId);
    return this.http.delete<Todo>(environment.hostMockedBackend + '/todos/' + todoId);
  }

}
