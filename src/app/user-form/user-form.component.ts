import { Component, OnInit } from '@angular/core';
import {User} from '../user'
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  model = new User( 'User@domain', "");

  submitted = false;

  onSubmit() { this.submitted = true; 
  console.log(this.model)
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit() {
  }

}
