import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinalComponent } from './final/final.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:"final", component: FinalComponent}
  , {path:"form", component: FormComponent} //3 paths for 3 different components
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
