import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitLength'
})
export class LimitLengthTextPipe implements PipeTransform {

  transform(value: string , ...args: unknown[]): unknown {

    let text = value.split('')
    let result = ''

    for (let i = 0; i <= 40; i++) {

      if (text.length <= 40 && !text[i]) {
        return result
      }

      result += text[i]

      if (i == 40 || (i == 40 && text[i] == ' ')) {
        result += '...'
      }

    }

    return result;
  }

}
