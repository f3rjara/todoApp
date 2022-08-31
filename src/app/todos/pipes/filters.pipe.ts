import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';
import { filtersValidator } from '../store/filter/filter.actions';

@Pipe({
  name: 'filtersTodo'
})

export class FiltersPipe implements PipeTransform {

  transform( itemsTodo: Todo[], filter: filtersValidator): Todo[] {
    console.log(itemsTodo);
    // filter: 'all' | 'completed' | 'pending'
    switch (filter) {
      case 'all':
        return itemsTodo;
      case 'completed':
        return itemsTodo.filter( item => item.completed );
      case 'pending':
        return itemsTodo.filter( item => !item.completed );
      default:
        return itemsTodo;
    }
  }

}
