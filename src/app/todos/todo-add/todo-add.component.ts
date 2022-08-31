import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from '../store/app.reducer';
import * as actions from '../store/todo/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent  {

  txtInput!: FormControl;

  constructor( private store: Store<AppState>) { 
    this.txtInput = new FormControl('', [ Validators.required, Validators.minLength(3) ]);
  }
  
  addInput( )  { 
    if( this.txtInput.invalid ) { return; }
    const text = this.txtInput.value;
    this.store.dispatch( actions.addItem( { text }) );
    this.txtInput.reset();
  }
}
