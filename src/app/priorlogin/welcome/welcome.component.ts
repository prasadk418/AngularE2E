import { Component, OnInit } from '@angular/core';
import { ApphttpclientService } from '../../apphttpclient.service';
import { ToastrService } from 'ngx-toastr';
import { AppModel } from '../../app.model';
import { Router } from '@angular/router';
import { AuthenticationModel } from '../../shared/services/authentication.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  vEmail;
  bEmail;

  checkStatus(mail,user){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
      this.appModel.setAttemptedMail(mail);
      this.apphttpclientService.post("/prelogin/checkstatus",{"user_name":mail}).subscribe(
        (res)=>{
          this.authenticationModel.setUserData(res.json());
          if(res.json().status === 'Approved'){              
              if(res.json().sqId === null){
                this.toastrService.success("Your registration has been approved. Please set your password here!");
                this.router.navigateByUrl('/prelogin/setpwd');
              } else if(res.json().sqId !== null){
                this.toastrService.error("Your registration has completed already. Please sign in using your credentials!");  
              }
          }else {
              // Toaster status is pening with admin
              this.toastrService.error("Your registration status is pening with administrator!");
          }
        },
        (err)=>{
          this.toastrService.error(err.json().message)
        }
      )
    }else {
        this.toastrService.error("Please enter a valid email.")
    }
  }

  constructor(private apphttpclientService:ApphttpclientService, private toastrService:ToastrService, private appModel:AppModel, private router:Router, private authenticationModel:AuthenticationModel) { }

  ngOnInit() {
  }

}
