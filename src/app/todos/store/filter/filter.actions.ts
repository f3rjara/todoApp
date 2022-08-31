import { createAction, props } from '@ngrx/store';

export type filtersValidator = 'all' | 'completed' | 'pending' ;

export const setFilterItems = createAction( 
  '[FILTER] set filter Items', 
  props<{ filter  : filtersValidator }>() 
);
