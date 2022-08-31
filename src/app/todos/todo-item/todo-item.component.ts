import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { AppState } from '../store/app.reducer';
import * as actions from '../store/todo/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @ViewChild('inputFisico') inputFisico! : ElementRef ;

  public chkCompletado!: FormControl;
  public TxtEdit! : FormControl;
  
  public editorTask: boolean = false;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.chkCompletado = new FormControl( this.todo.completed ) ;
    this.TxtEdit = new FormControl( this.todo.text, [ Validators.required, Validators.minLength(3) ] ),

    this.chkCompletado.valueChanges.subscribe( () => {
      this.store.dispatch( actions.toogleItem( { id: this.todo.id } ) );
    })
  }
  
  editingTask(): void {
    this.editorTask = true;
    this.TxtEdit.setValue( this.todo.text );
    setTimeout(() => {
      this.inputFisico.nativeElement.select();
    }, 10);
  }

  saveTask() {
    this.editorTask = false;
    if( this.TxtEdit.invalid ) { return; }
    if( this.TxtEdit.value == this.todo.text ) { return; }
    this.store.dispatch( actions.editItem( { id: this.todo.id, text: this.TxtEdit.value }))
  }

  removeTask() {
    this.store.dispatch( actions.deleteItem( { id: this.todo.id } ) );
  }
}
