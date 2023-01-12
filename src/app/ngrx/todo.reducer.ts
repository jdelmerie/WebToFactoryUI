import { Action, ActionReducer, createReducer, MetaReducer, on } from "@ngrx/store";
import { Todo } from "../models/todo.model";
import { initAction, getTodoList, getTodoListSuccess, getTodoListFailure } from "./todo.actions";

export const ROOT_FEATURE_KEY = 'root';

export interface State {
    readonly [ROOT_FEATURE_KEY]: RootState
}

export interface RootState {
    appName: string;
    todos: Todo[];
    error: string;
}

const initialState: RootState = {
    appName: 'Web Factory Todo',
    todos: [],
    error: ''
}

//A supprimer après
function log(reducer: ActionReducer<State>): ActionReducer<State> {
    return (state, action) => {
        const currentState = reducer(state, action);
        console.groupCollapsed(action.type)
        console.log('Etat précédent :', state);
        console.log('Action: ', action)
        console.log('Etat suivante :', currentState);
        console.groupEnd()
        return currentState;
    }
}

export const metaReducers: MetaReducer[] = [log];

export const rootReducer = createReducer<RootState, Action>(
    initialState,
    on(initAction, (state) => {
        return {
            ...state,
        }
    }),
    on(getTodoList, (state) => {
        return {
            ...state,
            todos: state.todos
        }
    }),
    on(getTodoListSuccess, (state, data) => {
        return {
            ...state,
            todos: data.todos
        }
    }),
    on(getTodoListFailure, (state, data) => {
        console.log(data)
        return {
            ...state,
            error: "Fail to get data"
        }
    }),
);