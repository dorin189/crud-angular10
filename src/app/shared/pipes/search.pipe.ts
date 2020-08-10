import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from '../services/employee.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Employee[], keyword: string): unknown {
    return value.filter((employee: Employee) => {
      return employee.FirstName.toLowerCase().includes(keyword)
        || employee.SecondName.toLowerCase().includes(keyword)
        || employee.Position.toLowerCase().includes(keyword);
    });
  }

}
