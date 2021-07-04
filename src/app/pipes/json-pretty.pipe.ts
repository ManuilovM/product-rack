import { Pipe, PipeTransform } from '@angular/core';
import { Shelf } from '../interfaces/shelf';

@Pipe({
  name: 'jsonPretty'
})
export class JsonPrettyPipe implements PipeTransform {

  transform(value: Shelf[]): string {
    return JSON.stringify(value, null, '\t');
  }

}
