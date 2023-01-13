import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAppName } from './ngrx/todo.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title$: Observable<string> | undefined = this.store.select(getAppName);

  constructor(private store: Store) { }

}
