import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ReportService } from '../report.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {

  today;
  model: User;

  constructor(private reportService: ReportService, private datePipe:DatePipe ) { 
    this.model=reportService.model;
    this.today = this.datePipe.transform( new Date(),'EEEE dd/MM/yyyy HH:mm');
  }

  ngOnInit() {
  }

}
