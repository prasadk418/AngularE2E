import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {MdInputModule} from '@angular/material';

import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { AppModel } from './app.model';
import { ApphttpclientService } from './apphttpclient.service';
import { ToastrModule } from 'ngx-toastr';
import { AppRouting } from './app.routes';
import {SharedService} from './shared/services/sharedservice'
//import { AdminComponent } from './admin/admin.component';

//import { BuilderComponent } from './builder/builder.component';
import { VendorComponent } from './vendor/vendor.component';

@NgModule({
  declarations: [
    AppComponent,
   // AdminComponent,
    //BuilderComponent,
    VendorComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    MdInputModule,
    SharedModule.forRoot(),
    AppRouting,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [AppModel,ApphttpclientService,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
