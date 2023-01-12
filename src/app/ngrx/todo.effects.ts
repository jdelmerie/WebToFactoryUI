import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError, EMPTY } from "rxjs";
import { environment } from "src/environments/environment";
import { Todo } from "../models/todo.model";
import { TodolistService } from "../services/todolist.service";
import { getTodoList, getTodoListFailure, getTodoListSuccess } from "./todo.actions";

@Injectable()
export class TodoEffects {

    constructor(private actions$: Actions, private service: TodolistService) { }

    loadTodos$ = createEffect(() => this.actions$.pipe(
        ofType(getTodoList),
        mergeMap(() => this.service.getTodoList()
            .pipe(
                map((todos: Todo[]) => getTodoListSuccess({todos})),
                catchError(async (err) => getTodoListFailure(err))
            )
        )
    ))
}