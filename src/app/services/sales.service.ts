import { Injectable } from '@angular/core';

@Injectable()
export class SalesService {
    private sales:Sale[] = [
        {
            "id":100,
            "total":852,
            "date":"2016-03-08"
        },
        {
            "id":200,
            "total":963,
            "date":"2016-03-12"
        },
        {
            "id":300,
            "total":789,
            "date":"2016-02-12"
        },
        {
            "id":400,
            "total":456,
            "date":"2016-04-17"
        },
        {
            "id":500,
            "total":123,
            "date":"2016-01-20"
        }
   ]
   constructor() {  }
   getSales(){
       return this.sales;
   }
}
export interface Sale{
    id:number;
    total:number;
    date:string;
}
