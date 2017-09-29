import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'sortBy'})

export class SortByPipe implements PipeTransform{
    transform(rows:any, sortArgs:any){
        return rows.sort(function(a, b){
            if(a[sortArgs.col] < b[sortArgs.col]){
                return -1 * sortArgs.order;
            }
            else if( a[sortArgs.col] > b[sortArgs.col]){
                return 1 * sortArgs.order;
            }
            else{
                return 0;
            }
        });
    }
}