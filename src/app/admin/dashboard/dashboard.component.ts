import { Component, OnInit } from '@angular/core';
import { ApphttpclientService } from '../../apphttpclient.service';
import {SharedService} from '../../shared/services/sharedservice';
import { AuthenticationModel } from '../../shared/services/authentication.model';
import {Constant} from '../../constants';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  userColumns;
  OrderColumns;
  orders;
  filterObject;
  users;
  mydata;

  getUsers(){
    this._apphttpclientService.get("/getbuilders/"+Constant.STATUS.Pending).subscribe(
            (res) => {
              console.log("res",res.json())
              if(res.json()){
               this.users = res.json().map((d,i)=>{d['sno']=i+1; return d;});

              console.log("row",this.users)
              }
                // Navigate to set password
            },
            (err) => {
                // Invalid user name
            }
    );
  }

  constructor(private _apphttpclientService:ApphttpclientService,
  private sharedService:SharedService,
  private authenticationModel:AuthenticationModel) { 
    sharedService.awaitOrdersData(false).subscribe(
            (res) => {
              if(res && !this.orders){
              console.log("res",res.json())
              if(res.json()){
                this.orders=res.json().map((d,i)=>{d['sno']=i+1;  return d;});
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
    this.getUsers();
     this.mydata = authenticationModel.getUserData()
  }

  ngOnInit() {
    this.OrderColumns = [
      { title: "IS.No", name: 'sno' },
      { title: "Material", name: 'material',sort:true },
      { title: "Unit of measure", name: 'uom' },
      { title: "Quantity", name: 'quantity' },
      { title: "Size", name: 'size' }
    ];
      this.userColumns = [
     { title: "S.No", name: 'sno' },
      { title: "First Name", name: 'firm_name',sort:true },
      { title: "Proprietor Name", name: 'proprietor_name' },
      { title: "Company Regn.No", name: 'comp_pan_no' },
    ];
  }

  getOrders(){
    this._apphttpclientService.get("prelogin/getsq").subscribe(
            (res) => {
                // Navigate to set password
            },
            (err) => {
                // Invalid user name
            }
    );
  }

}
