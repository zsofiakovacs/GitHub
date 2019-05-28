import { Injectable } from '@angular/core';
import { Report } from '../classes/report';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
   
private reportList: Report[];
private userList: User[];

  constructor() {
this.reportList= []
this.userList= []
   }

   getReport(): Report[]{
     return this.reportList
   }

   getUser(): User[]{
    return this.userList
  }

  createReport(report: Report): void{
this.reportList.push(report);
  }

  createUser(user: User): void{
    this.userList.push(user);
  }

  
}
