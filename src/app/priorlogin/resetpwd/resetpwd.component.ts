import { Component, OnInit } from '@angular/core';
import { ApphttpclientService } from '../../apphttpclient.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AppModel } from '../../app.model';

@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.component.html',
  styleUrls: ['./resetpwd.component.css']
})
export class ResetpwdComponent implements OnInit {
  
  sq;
  ans;
  pwd;
  cnfPwd;

  submitForm(form){
    if(form.valid && this.pwd === this.cnfPwd){
      this.apphttpclientService.post('/prelogin/forgotpwd',{   
        "user_name": this.appModel.getAttemptedMail(),
        "password": this.pwd,
        "sqPwd": this.ans}).subscribe(
          (res) => {
              this.toastrService.success("Your password has been submitted successfully! Please sign in using your credentials.");
              this.router.navigateByUrl('/prelogin/welcome');  
          },
          (err) => {
              this.toastrService.error(err.json().message);
          }  
        )
    }
  }

  constructor(private apphttpclientService:ApphttpclientService, private toastrService:ToastrService, private router:Router, private appModel:AppModel) { 
    this.sq =  this.appModel.getSecretQn().question;
  }

  ngOnInit() {
  }

}
