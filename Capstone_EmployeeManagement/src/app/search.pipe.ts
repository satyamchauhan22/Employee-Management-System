import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(param: Employee[], arg: string): Employee[] {
    if(!param) return [];
    if(!arg) return param;
    let search=arg.toLowerCase();
    return param.filter((a)=>{
      return a.name.toLowerCase().startsWith(search);
    });
  }

}
