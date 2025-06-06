import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeptRoutingModule } from './dept-routing.module';
import { CreateDeptComponent } from './components/create-dept/create-dept.component';


@NgModule({
  declarations: [
    CreateDeptComponent
  ],
  imports: [
    CommonModule,
    DeptRoutingModule
  ]
})
export class DeptModule { }
