import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'sortTotal'
})
export class sortTotalPipe implements PipeTransform {
    transform(array: Array<string>, args: string){
        if(!array || array === undefined || array.length === 0) return null;
        array.sort((a: any, b: any) => {
            if (a.total > b.total) {
                return 1;
            }
        });
        return array;
    }
}
