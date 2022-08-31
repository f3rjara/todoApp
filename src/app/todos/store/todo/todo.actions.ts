import { createAction, props } from '@ngrx/store';

export const addItem = createAction( 
  '[TODO] crear Item', 
  props<{ text: string}>() 
);

export const toogleItem = createAction( 
  '[TODO] Toogle Item', 
  props<{ id: number }>() 
);

export const toogleAllItems = createAction( 
  '[TODO] Toogle All Items',
  props<{ completed: boolean }>()  
);


export const editItem = createAction( 
  '[TODO] Edit Item', 
  props<{ id: number, text: string }>() 
);

export const deleteItem = createAction( 
  '[TODO] Delete Item', 
  props<{ id: number }>() 
);

//deleteCompletedItems
export const deleteCompletedItems = createAction(
  '[TODO] Delete Completed Items'
);