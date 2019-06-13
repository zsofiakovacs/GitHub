import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ReportService } from '../services/report.service';
import { DatePipe } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslationComponent } from '../translation/translation.component';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {

  today; //for the date
  model: User;

  constructor(private reportService: ReportService, private datePipe: DatePipe, private authenticationService: AuthenticationService, private translateService: TranslateService) {
    this.model = reportService.model;
    this.today = this.datePipe.transform(new Date(), 'HH:MM dd/MM/yyyy ');
  }

  ngOnInit() {
  }

  onSubmitIn() { //for Check In button

    console.log(this.model)
    this.authenticationService.checkIn(this.model).subscribe(data => {
      console.log('datos:::', data);
      console.log('logged:::', data.body.ENTRIES.LOGGED);
    })
    alert("You entered sing in time successfully" )

 

  }
  onSubmitOut() { //for Check On button

    console.log(this.model)
    this.authenticationService.checkOut(this.model, ).subscribe(data => {
      console.log('datos:::', data);
      console.log('logged:::', data.body.ENTRIES.LOGGED);})
      alert("You entered sing out time successfully" )
    
  }
}




