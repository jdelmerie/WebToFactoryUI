import { Injectable } from "@angular/core";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError, EMPTY, switchMap, of } from "rxjs";
import { Todo } from "../models/todo.model";
import { TodolistService } from "../services/todolist.service";
import * as TodosAction from "./todo.actions";

@Injectable()
export class TodoEffects {

    constructor(private actions$: Actions, private service: TodolistService) { }

    loadTodos$ = createEffect(() => this.actions$.pipe(
        ofType(TodosAction.GetTodos.do),
        mergeMap(() => this.service.getTodoList()
            .pipe(
                map((todos: Todo[]) => TodosAction.GetTodos.success({ todos })),
                catchError((err) => of(TodosAction.GetTodos.fail({ error: err })))
            )
        )
    ))
    updateTodo$ = createEffect(() => this.actions$.pipe(
        ofType(TodosAction.UpdateTodo.do),
        switchMap((action) => {
            return this.service.updateTodo(action.todo)
                .pipe(
                    map((todo) => TodosAction.UpdateTodo.success({ todo })),
                    catchError((err) => of(TodosAction.UpdateTodo.fail({ error: err })))
                )
        })
    ))
    addNewTodo$ = createEffect(() => this.actions$.pipe(
        ofType(TodosAction.AddTodo.do),
        switchMap((action) => {
            return this.service.addNewTodo(action.todo)
                .pipe(
                    map((todo) => TodosAction.AddTodo.success({ todo })),
                    catchError((err) => of(TodosAction.AddTodo.fail({ error: err })))
                )
        })
    ))

    deleteTodo$ = createEffect(() => this.actions$.pipe(
        ofType(TodosAction.deleteTodo),
        switchMap((action) => {
            return this.service.deleteTodo(action.id)
                .pipe(
                    map(() => {
                        return TodosAction.deleteTodo({ id: action.id });
                    })
                )
        })
    )
    )
}