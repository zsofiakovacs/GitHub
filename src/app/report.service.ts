import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  public model: User;

  constructor() {
    this. model = new User( '', "");
   }



}
