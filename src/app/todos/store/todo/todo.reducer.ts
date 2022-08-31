import { createReducer, on } from '@ngrx/store';
import { Todo } from '../../models/todo.model';
import * as actions from './todo.actions';

export const initialState:Todo[] = [
  new Todo( 'Create ngrx app' ) as Todo,
  new Todo( 'Vencer a Thanos' ) as Todo,
  new Todo( 'Crear Music App' ) as Todo,
];

export const todoReducer = createReducer(
  initialState,
  on( actions.addItem, (state, { text }) => [ ...state, new Todo(text) ] ),
  on( actions.toogleItem, (state, { id }) => {
    return state.map( todo => {  
      if ( todo.id === id ) { return { ...todo, completed: !todo.completed };
      } else { return todo; }
    });
  }),
  on( actions.editItem, (state, { id, text }) => {
    return state.map( todo => {  
      if ( todo.id === id ) { return { ...todo, text };
      } else { return todo; }
    });
  }),
  on( actions.deleteItem, (state, { id }) =>  state.filter( todo => todo.id !== id ) ),
  on( actions.toogleAllItems, ( state, { completed } ) => state.map( todo => {
    return { ...todo, completed };
  } ) ),
  on( actions.deleteCompletedItems, state => state.filter( todo => !todo.completed ) )
);