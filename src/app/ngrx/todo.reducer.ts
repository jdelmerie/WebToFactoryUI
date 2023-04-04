import { createReducer, on } from "@ngrx/store";
import { Todo } from "../models/todo.model";
import * as TodosAction from "./todo.actions";

export interface TodoState {
    allTodos: Todo[]
    todosDone: Todo[]
    todosUnDone: Todo[]
}

const initialState: TodoState = {
    todosDone: [],
    todosUnDone: [],
    allTodos: []
}

export const todoReducer = createReducer(
    initialState,
    on(TodosAction.GetTodos.success, (state, { todos }) => ({
        ...state,
        allTodos: todos,
        todosDone: todos.filter(todo => todo.done),
        todosUnDone: todos.filter(todo => !todo.done)
    })),
    on(TodosAction.AddTodo.success, (state, { todo }) => ({
        ...state,
        allTodos: [...state.allTodos, todo]
    })),    
    on(TodosAction.UpdateTodo.success, (state, { todo }) => ({
        ...state,
        allTodos: state.allTodos.map(t => todo.id === t.id ? todo : t)
    })),

    // on(TodosAction.UpdateTodo.success, (state, response) => {
    //     return state.map(todo => response.updateTodo.id === todo.id ? response.updateTodo : todo);
    // }),
    // on(TodosAction.AddTodo.success, (state, { todo }) => [todo, ...state.allTodos]),
    // on(TodosAction.GetTodos.success, (state, data) => {
    //     return data.todos;
    // }),
    // on(TodosAction.updateTodoSucess, (state, response) => {
    //     return state.map(todo => response.updateTodo.id === todo.id ? response.updateTodo : todo);
    // }),
    // on(TodosAction.addNewTodoSuccess, (state, { todo }) => [todo, ...state]),
    // on(TodosAction.deleteTodoSucess, (state, { id }) => {
    //     return state.filter((todo) => todo.id !== id);
    // })
)