import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {MdInputModule} from '@angular/material';

import { PriorloginComponent } from './priorlogin.component';

import { PriorLoginRouting } from './priorlogin.routes';
import { WelcomeComponent } from './welcome/welcome.component';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { SetpwdComponent } from './setpwd/setpwd.component';
import { RegestrationComponent } from './regestration/regestration.component';

@NgModule({
  declarations: [
        PriorloginComponent,
        WelcomeComponent,
        ResetpwdComponent,
        SetpwdComponent,
        RegestrationComponent
  ],
  imports: [  
        PriorLoginRouting,
        FormsModule,
        MdInputModule,
        CommonModule
  ],
  exports: [PriorloginComponent],
  providers: [
  ]
})

export class PriorLoginModule { }
