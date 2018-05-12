import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'moment' })
export class MomentPipe implements PipeTransform {
  transform(content: string): string {
    if (!content) return '';
    return moment(content).format('YYYY-MM-DD HH:mm:ss');
  }
}
