import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchBy' })

export class FilterPipe implements PipeTransform {
    transform(rows: any, search: any): any {
        if (search == null || search == undefined || search === '' || (typeof search === 'object' && JSON.stringify(search) === JSON.stringify({}))) return rows;
        if (typeof search === 'object' && search !== null) {

            if (search.hasOwnProperty('requestDate') || search.hasOwnProperty('toDate')) {
                var filteredArray = [];
                filteredArray = rows.filter( //Object
                    (obj, ind) => {
                        return this.compareSeachObjPropSWithObjPropS(obj, search, true)
                    }
                )
                return filteredArray.filter( //Object
                    (obj, ind) => {
                        if (search.hasOwnProperty('requestDate') && search.hasOwnProperty('toDate')) {
                            return ((new Date(obj.requestDate) >= new Date(search.requestDate)) && (new Date(obj.requestDate) <= new Date(search.toDate)))
                        }
                        if (search.hasOwnProperty('requestDate')) {
                            return (new Date(obj.requestDate) >= new Date(search.requestDate))
                        }
                        if (search.hasOwnProperty('toDate')) {

                            return (new Date(obj.requestDate) <= new Date(search.toDate))
                        }
                    }
                )
            } else {
                return rows.filter( //Object
                    (obj, ind) => {
                        return this.compareSeachObjPropSWithObjPropS(obj, search)
                    }
                )
            }
        }
        return rows.filter( //String
            (obj, ind) => {
                return this.checkSearchItemInObjPropS(obj, search)
            }
        )
    }

    checkSearchItemInObjPropS(obj, search) {
        for (var key in obj) {                       
            if (obj[key] != null && typeof(obj[key]) === "string" && obj[key].toLowerCase().indexOf(search.toLowerCase()) >= 0) {
                return true;
            }
        }
        return false;
    }

    compareSeachObjPropSWithObjPropS(obj, searchObj, ignoreDates=false) {
        for (var key in searchObj) {
            if(ignoreDates && (key === 'requestDate' || key === 'toDate')){
                //Ignoring
            } else {
                if (obj[key] !== searchObj[key])
                    return false;
            }
            
        }
        return true;
    }

}