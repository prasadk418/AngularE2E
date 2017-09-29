import { Component, OnInit } from '@angular/core';
import { ApphttpclientService } from '../../apphttpclient.service';
import {SharedService} from '../../shared/services/sharedservice'

@Component({
  selector: 'app-builder-ordersonhold',
  templateUrl: './ordersonhold.component.html',
  styleUrls: ['./ordersonhold.component.css']
})
export class OrdersOnHoldComponent implements OnInit {
  OrderColumns;
  filterObject;
  orders;

   getAllOrders(intens){
      this.sharedService.awaitOrdersData(intens).subscribe(
            (res) => {
              if((res && !this.orders) || intens){
              console.log("orders",res.json())
              if(res.json()){
                    this.orders = res.json().map((d,i)=>{d['sno']=i+1; return d;});
                }                
              }
            },
            (err) => {

            }
    );
 }

  constructor(private _apphttpclientService:ApphttpclientService, private sharedService:SharedService) {
    this.getAllOrders(false);
  }

  ngOnInit() {
    this.OrderColumns = [
      { title: "Order Date", name: 'orderDate' },
      { title: "Order No", name: 'orderId' },
      { title: "Item No", name: 'sno' },
      { title: "Material", name: 'material',sort:true },
      { title: "Unit of measure", name: 'uom' },
      { title: "Quantity", name: 'quantity' },
      { title: "Size", name: 'size' },
      { title: "Price", name: 'unitPrice',sort:true },
      { title: "Amount", name: 'amount' },
      { title: "Vendor no.", name: '' },
      { title: "Vendor name", name: '' },
      { title: "Comments", name: 'comments' }
    ];
  }

}
