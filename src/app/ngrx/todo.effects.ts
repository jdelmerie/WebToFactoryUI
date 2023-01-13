import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError, EMPTY, switchMap } from "rxjs";
import { Todo } from "../models/todo.model";
import { TodolistService } from "../services/todolist.service";
import { addNewTodo, addNewTodoSuccess, getTodoList, getTodoListSuccess, updateTodo, updateTodoSucess } from "./todo.actions";

@Injectable()
export class TodoEffects {

    constructor(private actions$: Actions, private service: TodolistService) { }

    loadTodos$ = createEffect(() => this.actions$.pipe(
        ofType(getTodoList),
        mergeMap(() => this.service.getTodoList()
            .pipe(
                map((todos: Todo[]) => getTodoListSuccess({ todos }))
            )
        )
    ))

    updateTodoState$ = createEffect(() => this.actions$.pipe(
        ofType(updateTodo),
        switchMap((action) => {
            return this.service.updateTodoState(action.updateTodo)
                .pipe(
                    map((data) => {
                        return updateTodoSucess({ updateTodo: data });
                    })
                )
        })
    )
    )

    addNewTodo$ = createEffect(() => this.actions$.pipe(
        ofType(addNewTodo),
        switchMap((action) => {
            return this.service.addNewTodo(action.todo)
                .pipe(
                    map((data) => {
                        return addNewTodoSuccess({ todo: data });
                    })
                )
        })
    )
    )
}