import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';
import { getTodoDetail } from 'src/app/ngrx/todo.actions';
import { getAllTodos } from 'src/app/ngrx/todo.selectors';

@Component({
  selector: 'app-tododetail',
  templateUrl: './tododetail.component.html',
  styleUrls: ['./tododetail.component.css']
})
export class TododetailComponent implements OnInit {

  todo: Todo | undefined;

  constructor(private route: ActivatedRoute, private store: Store, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.store.dispatch(getTodoDetail(id));
    this.store.select(getAllTodos).subscribe(todos => this.todo = todos.find(t => t.id == id))
    if (!this.todo) this.router.navigateByUrl('/');
  }
}
