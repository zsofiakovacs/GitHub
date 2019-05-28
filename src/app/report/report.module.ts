import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { FormComponent } from './form/form.component';
import { FinalComponent } from './final/final.component';

@NgModule({
  declarations: [FormComponent, FinalComponent],
  imports: [
    CommonModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
