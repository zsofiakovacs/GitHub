import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  model = new User( 'User@domain', "");
  constructor() { }
}
