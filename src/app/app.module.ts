import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TodolistService } from './services/todolist.service';
import { rootReducer, metaReducers, ROOT_FEATURE_KEY } from './ngrx/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoEffects } from './ngrx/todo.effects';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({[ROOT_FEATURE_KEY]: rootReducer}, {metaReducers}),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument({}),
    HttpClientModule
  ],
  providers: [TodolistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
