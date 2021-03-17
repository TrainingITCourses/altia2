import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  pure: true,
})
export class TruncatePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    const source = value as string;
    if (!source) return '';
    const argLimit = args[0] as number;
    const limit = argLimit ?? 5;
    const argTrail = args[1] as string;
    const trail = argTrail ?? '...';
    const result = source.substring(0, limit) + trail;
    // console.log(`${source}->${result}`);
    return result;
  }
}
