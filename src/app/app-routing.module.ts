import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TododetailComponent } from "./components/tododetail/tododetail.component";
import { TodolistComponent } from "./components/todolist/todolist.component";

const routes: Routes = [
    { path: '', component: TodolistComponent },
    { path: 'todo/:id', component: TododetailComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }