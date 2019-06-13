import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { ReportService } from '../services/report.service';
import { AuthenticationService } from '../services/authentication.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  submitted = false;
  model: User;

  constructor(private reportService: ReportService, private authenticationService: AuthenticationService, private translateService: TranslateService,private _router: Router) {
    this.model = this.reportService.model;
  }

  onSubmit() {
    console.log(this.reportService.model)
    this.authenticationService.loginS1(this.model).subscribe(data => {
      console.log('datos:::', data);
      console.log('logged:::', data.body.ENTRIES.LOGGED);
      if (data.body.ENTRIES.LOGGED == "true") {
        
        //console.log("Im in")
        this._router.navigate(['report']); // if login is successfull, pass to the next page
      } else {
        alert("An error occurred: "+ data.body.ENTRIES.EXCEPTION.MESSAGE) //for the error message if the credentials are incorrect
      }

    }, err => {
      console.log('Error:::', err);
    });


  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
  }

}
