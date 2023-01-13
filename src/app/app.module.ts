import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TodolistService } from './services/todolist.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoEffects } from './ngrx/todo.effects';
import { FormsModule } from '@angular/forms';
import { todoReducer } from './ngrx/todo.reducer';
import { metaReducers, rootReducer, ROOT_FEATURE_KEY } from './ngrx/index.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({[ROOT_FEATURE_KEY]: rootReducer}, {metaReducers}),
    StoreModule.forFeature('todos', todoReducer),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [TodolistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
