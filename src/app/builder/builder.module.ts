import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BuilderComponent } from './builder.component';
import {SharedModule} from './../shared/shared.module'

import { BuilderRouting } from './builder.routes';
import { NewOrdersComponent } from './neworders/neworders.component';
import { OrdersOnHoldComponent } from './ordersonhold/ordersonhold.component';
import { OrderHistoryComponent } from './orderhistory/orderhistory.component';

@NgModule({
  declarations: [
        BuilderComponent,
        OrderHistoryComponent,
        NewOrdersComponent,
        OrdersOnHoldComponent
  ],
  imports: [  
        BuilderRouting,
        FormsModule,
        SharedModule,
        CommonModule
  ],
  exports: [BuilderComponent],
  providers: [
        ToastrService
  ]
})

export class BuilderModule { }
