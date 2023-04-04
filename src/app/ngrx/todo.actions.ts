import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { Todo } from "../models/todo.model";

export const initAction = createAction('Init app');

export const GetTodos = createActionGroup({
    source: 'TODOS | GET TODOS',
    events: {
        'DO': emptyProps(),
        'SUCCESS': props<{ todos: Todo[] }>(),
        'FAIL': props<{ error: string }>()
    }
})
export const AddTodo = createActionGroup({
    source: 'TODOS | ADD TODO',
    events: {
        'DO': props<{ todo: Todo }>(),
        'SUCCESS': props<{ todo: Todo }>(),
        'FAIL': props<{ error: string }>()
    }
})
export const UpdateTodo = createActionGroup({
    source: 'TODOS | UPDATE TODO',
    events: {
        'DO': props<{ todo: Todo }>(),
        'SUCCESS': props<{ todo: Todo }>(),
        'FAIL': props<{ error: string }>()
    }
})
// export const updateTodo = createAction(
//     'Update Todo',
//     props<{ updateTodo: Todo }>()
// )

// export const updateTodoSucess = createAction(
//     'Update Todo Sucess',
//     props<{ updateTodo: Todo }>()
// )

export const getTodoDetail = createAction(
    'Get Todo Detail',
    props<{ id: number }>()
)


export const deleteTodo = createAction(
    'Delete Todo',
    props<{ id: number }>()
)

export const deleteTodoSucess = createAction(
    'Delete Todo Sucess',
    props<{ id: number }>()
)