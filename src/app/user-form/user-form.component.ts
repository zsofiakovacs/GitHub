import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { ReportService } from '../report.service';
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
<<<<<<< HEAD
    this.model = this.reportService.model;
=======
    this.model = this.reportService.model
>>>>>>> 8ca069a5a65462ded4d67c9645b0cf20124c1efc
  }

  onSubmit() {
    console.log(this.reportService.model)
    this.authenticationService.loginS1(this.model).subscribe(data => {
      console.log('datos:::', data);
      console.log('logged:::', data.body.ENTRIES.LOGGED);
      if (data.body.ENTRIES.LOGGED == "true") {
<<<<<<< HEAD
        alert("Hello "+this.model.name)
        console.log("Im in")
=======
        
        //console.log("Im in")
>>>>>>> 8ca069a5a65462ded4d67c9645b0cf20124c1efc
        this._router.navigate(['report']);
      } else {
        alert("An error occured: "+ data.body.ENTRIES.EXCEPTION.MESSAGE)
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
