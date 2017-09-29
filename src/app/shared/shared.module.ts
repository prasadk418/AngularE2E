import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TableComponent } from './components/table/table.component';

import { FilterPipe } from './components/table/tablefilter.pipe';
import { LimitToPipe } from './components/table/tablelimitto.pipe';
import { SortByPipe } from './components/table/tablesort.pipe'

import { AuthenticationModel } from './services/authentication.model';

@NgModule({
  declarations: [
    PagenotfoundComponent,
    TableComponent,
    FilterPipe,
    LimitToPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TableComponent,
    PagenotfoundComponent
  ]
})

export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers:[AuthenticationModel]                          // Providers listed here can be shared as a single instance across other modules that are imported in the app module
    }                                         
  }
}
