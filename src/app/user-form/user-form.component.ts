import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import { ReportService } from '../report.service';
import { AuthenticationService } from '../services/authentication.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

 
  
  submitted = false;
  model: User;

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  

    console.log(this.model)
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  constructor(private reportService: ReportService, private authenticationService: AuthenticationService, private translateService: TranslateService) { 
    this.model=reportService.model
   
    
  }

  ngOnInit() {
  }

}
