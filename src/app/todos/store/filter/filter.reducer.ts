import { createReducer, on } from '@ngrx/store';
import * as actions  from './filter.actions';

let myString: string = "all";
export const initialState: actions.filtersValidator = myString as actions.filtersValidator;

export const filterReducer = createReducer(
  initialState,
  on( actions.setFilterItems, ( state, { filter } ) => filter )
);
