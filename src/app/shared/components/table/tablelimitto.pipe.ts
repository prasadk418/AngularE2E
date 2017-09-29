import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'limitTo'})

export class LimitToPipe implements PipeTransform{
    transform(rows:any, limitTo:number){
        if(limitTo === undefined || limitTo=== 0) return rows;
        return rows.filter(
            (obj, ind) => ind<limitTo 
        )
    }
}