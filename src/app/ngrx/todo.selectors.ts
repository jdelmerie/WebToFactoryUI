import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RootState, ROOT_FEATURE_KEY } from "./todo.reducer";

const selectRoot = createFeatureSelector<RootState>(ROOT_FEATURE_KEY);

export const getAppName = createSelector(
    selectRoot,
    (state) => state.appName
);

export const getAllTodos = createSelector(
    selectRoot,
    (state) => state.todos
)

export const getError = createSelector(
    selectRoot,
    (state) => state.error
)