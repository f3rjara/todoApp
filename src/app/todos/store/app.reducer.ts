import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "../models/todo.model";
import { filtersValidator } from './filter/filter.actions';
import { todoReducer } from "./todo/todo.reducer";
import { filterReducer } from './filter/filter.reducer';

export interface AppState {
  todoApp: Todo[],
  filter: filtersValidator
}

export const appReducers: ActionReducerMap<AppState> = {
  todoApp: todoReducer,
  filter: filterReducer
}