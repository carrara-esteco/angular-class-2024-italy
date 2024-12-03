import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appAbv',
  standalone: true,
  pure: true
})
export class AbvPipe implements PipeTransform {

  transform(value: number): string {
        return `${value} %`;
    }

}
