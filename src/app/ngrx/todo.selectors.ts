import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Todo } from "../models/todo.model";
import { RootState, ROOT_FEATURE_KEY } from "./index.reducer";

const selectRoot = createFeatureSelector<RootState>(ROOT_FEATURE_KEY);

export const selectorTodos = createFeatureSelector<Todo[]>('todos');

export const getAppName = createSelector(
    selectRoot,
    (state) => state.appName
);

export const getAllTodos = createSelector(
    selectorTodos,
    (state) => state
)

export const getError = createSelector(
    selectRoot,
    (state) => state.error
)