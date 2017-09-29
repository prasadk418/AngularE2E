import { Component, OnInit } from '@angular/core';
import { ApphttpclientService } from '../../apphttpclient.service';
import { ToastrService } from 'ngx-toastr';
import {SharedService} from '../../shared/services/sharedservice'
import { AuthenticationModel } from '../../shared/services/authentication.model';

@Component({
  selector: 'app-builder-neworders',
  templateUrl: './neworders.component.html',
  styleUrls: ['./neworders.component.css']
})
export class NewOrdersComponent implements OnInit {
  OrderColumns;
  newOrder:NewOrder;
  materials;
  uoms;
  filterObject;
  orders;
  orderForm;
  mydata;
  
submitOrder(form,resetForm){
  console.log("form",form)
  if(form.valid && form.value.material!="" && form.value.uom!=0){
    form.value.user_name = this.mydata.user_name;
     this._apphttpclientService.post("/api/order/new",form.value).subscribe(
            (res) => {
              console.log("res mmm",res.json())
              if(res.json()){
                this.getAllOrders(true);
                this.toastrService.success(res.json().message);
                this.newOrder=new NewOrder();
                resetForm.reset();
                this.uoms=[];
              }
                // Navigate to set password
            },
            (err) => {
                // Invalid user name
                 this.toastrService.error(err.json().message);
            }
    );
  }
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
 getuomBymaterial(materialId){
  this._apphttpclientService.get("/getuom/"+materialId).subscribe(
            (res) => {
              if(res.json()){
                this.uoms=res.json();
              }
            },
            (err) => {
                // Invalid user name
            }
    );
 } 
 getAllOrders(intens){
      this.sharedService.awaitOrdersData(intens).subscribe(
            (res) => {
              if((res && !this.orders) || intens){
              console.log("orders",res.json())
              if(res.json()){
                  this.orders = res.json().map((d,i)=>{d['sno']=i+1; return d;});
              }
                // Navigate to set password

              }
            },
            (err) => {
            }
    );
 }
  constructor(private _apphttpclientService:ApphttpclientService,private authenticationModel:AuthenticationModel, private sharedService:SharedService,private toastrService:ToastrService) { 
    this.getallMaterials();
    this.newOrder=new NewOrder();
    this.getAllOrders(false);
    this.mydata=authenticationModel.getUserData();
  }

  ngOnInit() {
      this.OrderColumns = [
      { title: "Item No", name: 'sno' },
      { title: "Material", name: 'material',sort:true },
      { title: "Unit of measure", name: 'uom' },
      { title: "Quantity", name: 'quantity' },
      { title: "Size", name: 'size' },
      { title: "Order Date", name: 'orderDate' },
      { title: "Order No", name: 'orderId' }
    ];
  }

}

class NewOrder{
  material:string="";
  uom:number=0;
  quantity:number
  size:string
  company_name:string;
}
