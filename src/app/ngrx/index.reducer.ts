import { MetaReducer, createReducer, Action, on } from "@ngrx/store";
import { initAction } from "./todo.actions";

export const ROOT_FEATURE_KEY = 'root';

export interface State {
    [ROOT_FEATURE_KEY]: RootState
}

export interface RootState {
    appName: string;
    error: string;
}

const initialState: RootState = {
    appName: 'Web Factory Todo',
    error: ''
}

export const metaReducers: MetaReducer[] = [];

export const rootReducer = createReducer<RootState, Action>(
    initialState,
    on(initAction, (state) => {
        return {
            ...state,
        }
    })
);
