import { Injectable,Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http'
import { Subject }    from 'rxjs/Subject';
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { ApphttpclientService } from '../../apphttpclient.service';

@Injectable()
export class SharedService {
private ordersData = new BehaviorSubject(undefined);
private ordersfetching: boolean;

private getOrdersData() {
        console.log("get mod")
        return this.ordersData.asObservable();
    }
    awaitOrdersData(intensional) {
      console.log("33333",this.ordersData)
        if((!this.ordersData.getValue() && !this.ordersfetching) || intensional){
            this.refreshOrdersData();
        }
        return this.getOrdersData();
    }
    refreshOrdersData() {
      console.log("modddddd")
        this.ordersfetching = true;
        this._http.get('/getallorders')
        .subscribe(data => {
          console.log("datadatadata",data)
            this.ordersfetching = false;
            this.ordersData.next(data);
        },err => {
            this.ordersfetching = false;
            this.ordersData.error(err);
        });
    }

      constructor(private _http: ApphttpclientService){} 

}