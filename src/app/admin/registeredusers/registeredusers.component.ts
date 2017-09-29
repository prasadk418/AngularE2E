import { Component, OnInit } from '@angular/core';
import { ApphttpclientService } from '../../apphttpclient.service';
import {Constant} from '../../constants'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-registeredusers',
  templateUrl: './registeredusers.component.html',
  styleUrls: ['./registeredusers.component.css']
})
export class RegisteredUsersComponent implements OnInit {
  userColumns;
  rows;
  filterObject;
  constants;
  currentRow;
  getUsers(){
    this._apphttpclientService.get("/getbuilders/"+Constant.STATUS.Pending).subscribe(
            (res) => {
              console.log("res",res.json())
              if(res.json()){
               this.rows = res.json().map((d,i)=>{d['sno']=i+1; return d;});

              console.log("row",this.rows)
              }
                // Navigate to set password
            },
            (err) => {
                // Invalid user name
            }
    );
  }
  onClickDetails(row){
    console.log("rrrrrrr",row)
    this.currentRow=row;
    document.getElementById('openModalButton').click();
  }
  changestatus(status){
    console.log("status",status)
      this._apphttpclientService.post('/api/admin/changestatus',{"user_name":this.currentRow.business_email,"status":status}).subscribe(
            (res) => {
              if(res){
              console.log("res",res.json())
              this.getUsers();
              document.getElementById('statusclose').click();
              this.toastrService.success(res.json().message);

              if(res.json()){
             //  this.rows = res.json().map((d,i)=>{d['sno']=i+1; d['status']=d.user_id.status; return d;});
             // console.log("row",this.rows)
              }
                // Navigate to set password

              }
            },
            (err) => {
               this.toastrService.error(err.json().message);
                // Invalid user name
            }
    );
  }
  constructor(private _apphttpclientService:ApphttpclientService,private toastrService:ToastrService) {
    this.constants=Constant;
   }

  ngOnInit() {
    console.log("Constant",Constant)
    this.getUsers();
    this.userColumns = [
     { title: "S.No", name: 'sno' },
      { title: "First Name", name: 'firm_name',sort:true },
      { title: "Proprietor Name", name: 'proprietor_name' },
      { title: "Company Regn.No", name: 'comp_pan_no' },
      { title: "GST No", name: 'gst_no' },
      { title: "Address", name: 'address' },
      { title: "Mobile", name: 'mobile' },
      { title: "LandLine", name: 'landline_no' },
      { title: "Business E-mail", name: 'business_email' },
      { title: 'Status', name:"status", cellElement: 'href', innerText: '', this: this, clickHandler: this.onClickDetails  }
    ];
   
  }
}
