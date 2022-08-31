import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import * as actions from '../store/filter/filter.actions';
import { deleteCompletedItems } from '../store/todo/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  public filterInit: actions.filtersValidator = 'all' as actions.filtersValidator;
  public filters: actions.filtersValidator[] = ['all', 'completed' , 'pending'];

  public pendingItems: number = 0;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe( state => { 
      this.filterInit = state.filter;
      this.pendingItems = state.todoApp.filter( todo => !todo.completed ).length;
    });
  }

  runFilter( filter: actions.filtersValidator ) {
    this.store.dispatch( actions.setFilterItems({ filter }) );
  }

  deleteCompleted() {
    this.store.dispatch( deleteCompletedItems() );
  }

}
