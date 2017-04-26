import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'sortDate'
})
export class sortDatePipe implements PipeTransform {
    transform(array: Array<string>, args: string) {
        if(!array || array === undefined || array.length === 0) return null;
        array.sort((a: any, b: any) => {
            if (a.date > b.date) {
                return 1;
            }
        });

        return array;
    }
}
