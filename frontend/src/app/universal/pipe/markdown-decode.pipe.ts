import { Pipe, PipeTransform } from '@angular/core';

import { Base64 } from 'js-base64';

@Pipe({ name: 'decode' })
export class MarkdownDecodePipe implements PipeTransform {
  transform(content: string): string {
    return Base64.decode(content);
  }
}
