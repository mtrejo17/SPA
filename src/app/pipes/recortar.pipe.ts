import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recortar'
})
export class RecortarPipe implements PipeTransform {

  transform(value: string, longitud?: any): string {
    if (value.length > longitud) {
      return value.substring(0, longitud) + " ...";
    } else {
      return value;
    }
  }

}
