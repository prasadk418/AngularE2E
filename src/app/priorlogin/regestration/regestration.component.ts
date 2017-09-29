import { Component, OnInit } from '@angular/core';
import { ApphttpclientService } from '../../apphttpclient.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.css']
})
export class RegestrationComponent implements OnInit {
  firmName;
  propName;
  compPanNo;
  compRegNo;
  gstNo;
  address;
  pinCode;
  landLineNum;
  phoneNum;
  faxNum;
  busiEmail;
  secEmail;

  submitForm(form){   
    if(form.valid){
      this.apphttpclientService.post("/api/builder/add",
      {
          "firm_name": this.firmName,
          "user_id": {
              "user_name": this.busiEmail,
              "full_name": this.propName               
            },
          "proprietor_name": this.propName,
          "comp_reg_no": this.compRegNo,
          "comp_pan_no": this.compPanNo,
          "gst_no": this.gstNo,
          "address": this.address,
          "pincode": this.pinCode,
          "landline_no": this.landLineNum,
          "mobile": this.phoneNum,
          "fax": this.faxNum,
          "business_email": this.busiEmail,
          "secondary_email": this.secEmail
      }).subscribe(
        (res)=>{
          this.toastrService.success(res.json().message);
          this.router.navigateByUrl('/prelogin/welcome');          
        },
        (err)=>{
          this.toastrService.error(err.json().message);
        }
      )
    }
  }

  constructor(private apphttpclientService:ApphttpclientService, private toastrService:ToastrService, private router:Router) { }

  ngOnInit() {
  }

}
