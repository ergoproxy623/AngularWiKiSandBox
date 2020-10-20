import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'multi'
})
export class MultiPipe implements PipeTransform {

    transform(value: string, num: number): unknown {
        let val = '';
        for (let i = 0; i < num ; i++) {
            val += value;
        }
        return val;
    }

}
