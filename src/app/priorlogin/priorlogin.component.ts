import { Component, OnInit } from '@angular/core';
import { ApphttpclientService } from '../apphttpclient.service';
import { AuthenticationModel } from '../shared/services/authentication.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AppModel } from '../app.model';

@Component({
  selector: 'app-priorlogin',
  templateUrl: './priorlogin.component.html',
  styleUrls: ['./priorlogin.component.css']
})
export class PriorloginComponent implements OnInit {
    email;
    pwd;
    submitForm(form: any): void{    
        console.log(form.valid)
        console.log(form)
        if(form.valid){            
            this.apphttpclientService.post("/prelogin/signin", {"user_name": this.email,"password": this.pwd}).subscribe(
                (res) => {
                    this.resetfields();
                    this.authenticationModel.setUserData(res.json().user);
                    this.authenticationModel.setToken(res.json().token);
                    this.checkUser();
                },
                (err) => {
                    this.toastrService.error(err.json().message);
                }
            )
        }
    }
    resetfields(){
        this.email = "";
        this.pwd = "";
    }

    forgotpwd(){
        if(this.email){
            this.appModel.setAttemptedMail(this.email);
            this.apphttpclientService.post("/prelogin/checkstatus",{"user_name":this.email}).subscribe(
                (res)=>{
                    if(res.json().status === 'Approved'){                        
                        this.apphttpclientService.post("/prelogin/getsq", {"user_name": this.email}).subscribe(                            
                            (res) => {
                                this.resetfields();
                                this.appModel.setSecretQn(res.json());
                                this.router.navigateByUrl('/prelogin/resetpwd');
                            },
                            (err) => {
                                // toaster you haven't set your secret question yet
                                this.toastrService.error(err.json().message);
                            }
                        )
                    }else {
                        // Toaster status is pening with admin
                        this.toastrService.error("Your registration status is pening with administrator!");
                    }
                },
                (err)=>{
                    this.toastrService.error(err.json().message);
                }
            )
        }
    }

    checkUser(){
        if(this.authenticationModel.getUserData().user_type === 'admin'){
            if(this.authenticationModel.getUserData().sqId === null){
                this.router.navigateByUrl('/prelogin/setpwd');
                this.toastrService.success("Welcome dear admin! Please set your own password here.");
            } else {
                this.router.navigateByUrl('admin');
                this.toastrService.success("Your sign in is successful!");
            }            
        } else if(this.authenticationModel.getUserData().user_type === 'builder'){
            this.router.navigateByUrl('builder');
            this.toastrService.success("Your sign in is successful!");
        } else if(this.authenticationModel.getUserData().user_type === 'vendor'){
            this.router.navigateByUrl('vendor');
            this.toastrService.success("Your sign in is successful!");
        }
    }
    constructor(private apphttpclientService:ApphttpclientService, private authenticationModel:AuthenticationModel, private toastrService:ToastrService, private router:Router, private appModel:AppModel) { }

    ngOnInit() {
    }

}
