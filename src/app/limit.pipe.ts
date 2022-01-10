import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(str:any): any {
    return str.substring(0, 100) + '...';
}

}
