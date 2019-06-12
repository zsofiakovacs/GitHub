import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportFormComponent } from './report-form/report-form.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {
    path: '',
    component: UserFormComponent,
  },
  {
    path: 'login',
    redirectTo: '',
    pathMatch: 'full'
  },
 {
    path: 'report',
    component: ReportFormComponent,
  },
  {
    path: 'login',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
