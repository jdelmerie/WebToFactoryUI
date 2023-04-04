import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Todo } from "../models/todo.model";
import { RootState, ROOT_FEATURE_KEY } from "./index.reducer";
import { TodoState } from "./todo.reducer";

const selectRoot = createFeatureSelector<RootState>(ROOT_FEATURE_KEY);

export const selectorTodos = createFeatureSelector<TodoState>('todos');

export const getAppName = createSelector(
    selectRoot,
    (state) => state.appName
);

export const getAllTodos = createSelector(
    selectorTodos,
    (state) => state
)

export const getTodosDone = createSelector(
    getAllTodos,
    (state) => state.todosDone
)

export const getTodosUnDone = createSelector(
    getAllTodos,
    (state) => state.todosUnDone
)

export const getTodoById = (todoId: number) => createSelector(
    getAllTodos,
    (todos) => todos.allTodos.find(todo => todo.id == todoId)
)

export const getAllTodosSize = createSelector(
    selectorTodos,
    (state) => state.allTodos.length > 0 ? Math.max(...state.allTodos.map(todo => todo.id)) + 1 : 1
)

export const getError = createSelector(
    selectRoot,
    (state) => state.error
)