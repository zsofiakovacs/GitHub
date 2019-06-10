import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ReportService } from '../report.service';
import { DatePipe } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {

  today;
  model: User;

  constructor(private reportService: ReportService, private datePipe:DatePipe, private authenticationService: AuthenticationService, private translateService: TranslateService ) { 
    this.model=reportService.model;
    this.today = this.datePipe.transform( new Date(),'dd/MM/yyyy HH:mm');
  }

  ngOnInit() {
  }
 
  onSubmitIn(){

  }
  onSubmitOut(){
    
  }

}



