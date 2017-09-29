import { Component, OnInit } from '@angular/core';
import { AuthenticationModel } from '../../shared/services/authentication.model';
import { ApphttpclientService } from '../../apphttpclient.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setpwd',
  templateUrl: './setpwd.component.html',
  styleUrls: ['./setpwd.component.css']
})
export class SetpwdComponent implements OnInit {
  userName;
  questions = [{sqId: 0, question: "SELECT QUESTION"}];
  showComp = false;
  selectedQn;
  pwd;
  cnfPwd;
  ans;

  submitForm(form){
      if(form.valid && this.selectedQn.sqId!==0 && this.pwd === this.cnfPwd){
        this.apphttpclientService.post('/prelogin/setpwd', { "user_name": this.userName, "password": this.pwd, "sqId": this.selectedQn.sqId+'', "sqPwd":this.ans }).subscribe(
          (res)=>{
              this.toastrService.success("Your password has been submitted successfully! Please sign in using your credentials.");
              this.router.navigateByUrl('/prelogin/welcome');
          },
          (err)=>{
              this.toastrService.error(err.json().message);
          }
        )
      }
  }

  constructor(private authenticationModel:AuthenticationModel, private apphttpclientService:ApphttpclientService, private toastrService:ToastrService, private router:Router) {
      this.userName = this.authenticationModel.getUserData().user_name;
      this.selectedQn = this.questions[0];
      this.apphttpclientService.get('/getallsq').subscribe(
        (res) => {
            if(res.json().length > 0){
              for(let qn of res.json()){
                this.questions.push(qn);
              }              
              this.showComp = true;         
            }            
        },
        (err)=>{
            this.toastrService.error(err.json().message);
        }
      )
  }

  ngOnInit() {
  }

}