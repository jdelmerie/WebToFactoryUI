import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { Todo } from "../models/todo.model";

export const initAction = createAction('Init app');

export const getTodoList = createAction(
    'Get list of todos'
)

export const getTodoListSuccess = createAction(
    'Get list of todos Success',
    props<{ todos: Todo[] }>()
)

export const updateTodo = createAction(
    'Update Todo',
    props<{ updateTodo: Todo }>()
)

export const updateTodoSucess = createAction(
    'Update Todo Sucess',
    props<{ updateTodo: Todo }>()
)
