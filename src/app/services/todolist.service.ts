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
  public getTodoList(): Observable<Todo[]> {
    return this.http.get<Todo[]>('api/todos');
  }

  /**
   * Update todo state
   */
  public updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>('api/todos/' + todo.id , todo);
  }

  /**
   * Add new todo
   */
  public addNewTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('api/todos', todo);
  }

  /**
  * Add new todo
  */
  public deleteTodo(todoId: number) {
    return this.http.delete<Todo>('api/delete/' + todoId);
    // return this.http.delete<Todo>(environment.hostMockedBackend + '/todos/' + todoId);
  }

}
