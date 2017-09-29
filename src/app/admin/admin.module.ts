import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminComponent } from './admin.component';
import {SharedModule} from './../shared/shared.module'

import { AdminRouting } from './admin.routes';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { RegisteredUsersComponent } from './registeredusers/registeredusers.component';
import { OrderDetailsComponent } from './orderdetails/orderdetails.component';
import { OrderHistoryComponent } from './orderhistory/orderhistory.component';

@NgModule({
  declarations: [
        AdminComponent,
        AdminDashboardComponent,
        RegisteredUsersComponent,
        OrderDetailsComponent,
        OrderHistoryComponent
  ],
  imports: [  
        AdminRouting,
        FormsModule,
        SharedModule,
        CommonModule
  ],
  exports: [AdminComponent],
  providers: [
        ToastrService
  ]
})

export class AdminModule { }
