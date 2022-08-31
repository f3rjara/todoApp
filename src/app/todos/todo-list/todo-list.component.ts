import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from '../models/todo.model';
import { filtersValidator } from '../store/filter/filter.actions';
import { AppState } from './../store/app.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todos: Todo[] = [] ;
  public filter: filtersValidator = 'all' as filtersValidator;
  
  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store
      .subscribe({
        next:  ( {todoApp , filter} ) => { 
          this.todos = todoApp;  
          this.filter = filter;
        },
        error: ( err )  => { console.warn(err) }
      })
  }

}
