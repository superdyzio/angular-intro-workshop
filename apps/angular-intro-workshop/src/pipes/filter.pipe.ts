import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], text: string, property: string): any[] {
    return items.filter((item) => item[property].includes(text));
  }
}
