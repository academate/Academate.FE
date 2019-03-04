import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanToTrueFalse'
})
export class BooleanToTrueFalsePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value as boolean ? 'Yes' : 'No';
  }

}
