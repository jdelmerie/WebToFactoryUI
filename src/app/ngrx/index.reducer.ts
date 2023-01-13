import { ActionReducer, MetaReducer, createReducer, Action, on } from "@ngrx/store";
import { addNewTodoSuccess, initAction } from "./todo.actions";

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

//à supprimer après
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
    })
);
