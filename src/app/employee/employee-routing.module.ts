import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpComponent } from './components/create-emp/create-emp.component';

const routes: Routes = [
  {
    path: 'create-emp',
    component: CreateEmpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
