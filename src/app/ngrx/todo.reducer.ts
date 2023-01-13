import { createReducer, on } from "@ngrx/store";
import { Todo } from "../models/todo.model";
import { addNewTodoSuccess, getTodoListSuccess, updateTodoSucess } from "./todo.actions";

export const initialState: ReadonlyArray<Todo> = [];

export const todoReducer = createReducer(
    initialState,
    on(getTodoListSuccess, (state, data) => {
        return data.todos;
    }),
    on(updateTodoSucess, (state, response) => {
        return state.map(todo => response.updateTodo.id === todo.id ? response.updateTodo : todo);
    }),
    on(addNewTodoSuccess, (state, {todo}) => [todo, ...state])
)