import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDeptComponent } from './components/create-dept/create-dept.component';

const routes: Routes = [
  {
    path: 'create-dept',
    component: CreateDeptComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeptRoutingModule {}
