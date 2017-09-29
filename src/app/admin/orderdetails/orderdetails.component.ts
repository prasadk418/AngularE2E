import { Component, OnInit } from '@angular/core';
import { ApphttpclientService } from '../../apphttpclient.service';
import {SharedService} from '../../shared/services/sharedservice';
import {Constant} from '../../constants';

@Component({
  selector: 'app-admin-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderDetailsComponent implements OnInit {
  OrderColumns;
  orders;
  ordersCopy:Array<any>;
  filterObject={};
  materials;
  builders;
  statuslist;

  onClicked(row:any){
    console.log("row",row)
  }
  filterOrders(){
    console.log("fffilter",this.filterObject);
    this.filterObject = Object.assign({},this.filterObject);
    //this.orders = this.ordersCopy.filter(s=>s)
  }
  getAllOrders(intens){
     this.sharedService.awaitOrdersData(false).subscribe(
            (res) => {
              if(res && !this.orders){
              console.log("res",res.json())
              if(res.json()){
                this.ordersCopy = JSON.parse(JSON.stringify(res.json()))
                this.orders=res.json().map((d,i)=>{d['sno']=i+1;  return d;});
                this.builders = this.orders.map(s=>s.firm_name)
                console.log("asdsfsd",this.builders)
             //  this.rows = res.json().map((d,i)=>{d['sno']=i+1; d['status']=d.user_id.status; return d;});
             // console.log("row",this.rows)
              }
                // Navigate to set password

              }
            },
            (err) => {
                // Invalid user name
            }
    );
  }
  getallMaterials(){
  this._apphttpclientService.get("/getallmaterials").subscribe(
            (res) => {
              console.log("res mmm",res.json())
              this.materials=res.json();
              if(res.json()){
              }
                // Navigate to set password
            },
            (err) => {
                // Invalid user name
            }
    );
 } 

  constructor(private _apphttpclientService:ApphttpclientService,private sharedService:SharedService) { 
    this.getAllOrders(false);
    this.getallMaterials();
    this.statuslist = Object.keys(Constant.STATUS);
    console.log("statuslist",this.statuslist)
  }

  ngOnInit() {
  this.OrderColumns = [
      { title: '', cellElement: 'radio', this: this, clickHandler: this.onClicked },
      { title: "Material", name: 'material' },
      { title: "Builder name", name: 'firm_name',sort:true },
      { title: "UOM", name: 'uom' },
      { title: "Qty", name: 'qty' },
      { title: "Size", name: 'size' },
      { title: "Order date", name: 'orderDate' },
      { title: "Order No", name: 'orderId' },
      { title: "Status", name: 'orderStatus' }
    ];
    
  }

}
