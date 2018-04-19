import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personUpperCase'
})
export class PersonUpperCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
