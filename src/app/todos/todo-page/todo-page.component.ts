import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import * as actions from '../store/todo/todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  public completados: boolean = false;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void { }

  toogleAllTodos(): void {
    this.completados = !this.completados;
    this.store.dispatch( actions.toogleAllItems({ completed: this.completados }) );
  }
}
