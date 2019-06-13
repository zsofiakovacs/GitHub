import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../user';
import {Md5} from 'ts-md5/dist/md5';
import { flatMap } from 'rxjs/operators';
import { DatePipe, formatDate } from '@angular/common';
import { ReportService } from './report.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private httpClient: HttpClient ) {
  }

  login(credentials: User) : Observable<any>{
    let url = 'https://demo.movilizer.com/MovilizerDistributionService/m2m?dataformat=JSONCorrect&deviceAddress=@backend-web@dphuesca.es';
    url = url.concat(`&password=ajsw3xhu8s183`);
    let body = {
      "DATA": {
        "EMAIL": "ISA@MOVICODERS.COM"
      },
      "KEY": "R_LOGIN_1558956543532",
      "MOVELETKEYEXT": "/query",
      "INFO": {
        "DEV_TIME_ZONE": "+02:00"
    },
      "LOGIN": {
        "AUTHENTICATED": false,
        "EMAIL": "ISA@MOVICODERS.COM",
        "LANGUAGE": "es_ES"
      },
      "MOVELETKEY": "TCM",
      "TRANSACTION_ID": "LOGIN"
    }; // json format how the data should be sent

    const headers:HttpHeaders  = new HttpHeaders();
    headers.set('content-type', 'application/json');
    
    return this.httpClient.post(url, body, {headers: headers});
  }

   loginS1(credentials: User) : Observable<any>{
    let url = 'http://localhost:3000';
    
    let body: Object = {
      "method": "POST",
      "request": {
        "url": "https://demo.movilizer.com/MovilizerDistributionService/m2m?dataformat=JSONCorrect&deviceAddress=@backend-web@dphuesca.es&password=ajsw3xhu8s183"
      },
      "body": {
        "DATA": {
            "EMAIL": credentials.name
        },
        "KEY": "R_LOGIN_1558956543532",
        "MOVELETKEYEXT": "/query",
        "INFO": {
           "DEV_TIME_ZONE": "+02:00"
        },
        "LOGIN": {
            "AUTHENTICATED": false,
            "EMAIL": credentials.name,
            "LANGUAGE": "es_ES"
        },
        "MOVELETKEY": "TCM",
        "TRANSACTION_ID": "LOGIN"
      }
    }

    const headers:HttpHeaders  = new HttpHeaders();
    headers.set('content-type', 'application/json');
    
    return this.httpClient.post(url, body, {headers: headers})
    .pipe(
      flatMap(data => this.loginS2(data, credentials))
    );
    
   }

  loginS2(responseS1: any, credentials: User) : Observable<any>{
    let url = 'http://localhost:3000';

    const salt: string = responseS1.body.ENTRIES.SALT;
    const duel: string = responseS1.body.ENTRIES.DUEL;
    const pass: string = credentials.password;

    const md5 = new Md5();
    console.log(md5.appendStr('hello').end());

    let passCif:string  = Md5.hashStr(pass.concat(salt)).toString().toUpperCase();
    let respDuel:string  = Md5.hashStr(passCif.concat(duel)).toString().toUpperCase();
    
    //console.log(passCif);
    //console.log(respDuel);
    
    let body: Object = {
      "method": "POST",
      "request": {
        "url": "https://demo.movilizer.com/MovilizerDistributionService/m2m?dataformat=JSONCorrect&deviceAddress=@backend-web@dphuesca.es&password=ajsw3xhu8s183"
      },
      "body": {
        "KEY": "R_LOGIN_1558956543532",
        "TRANSACTION_ID": "LOGIN",
        "MOVELETKEY": "TCM",
        "MOVELETKEYEXT": "/query",
        "INFO": {
          "DEV_TIME_ZONE": "+02:00"
        },
        "LOGIN": {
          "EMAIL": credentials.name,
          "LANGUAGE": "es_ES",
          "AUTHENTICATED": false
        },
        "DATA": {
          "EMAIL"     : credentials.name,
          "RESP_DUEL" : respDuel
        }
      }
    };

    const headers:HttpHeaders  = new HttpHeaders();
    headers.set('content-type', 'application/json');
    
    return this.httpClient.post(url, body, {headers: headers})


  }

  checkIn(credentials: User) : Observable<any>{
    
    let url = 'http://localhost:3000';

    let body: Object = {
      "method": "POST",
      "request": {
        "url": "https://demo.movilizer.com/MovilizerDistributionService/m2m?dataformat=JSONCorrect&deviceAddress=@backend-web@dphuesca.es&password=ajsw3xhu8s183"
      },
      "body": {
        "DATA": {
          "REASON_ID": "0",
          //"DATETIME_SIGNING": "2019-05-28T09:57:00.000+02:00",
          "DATETIME_SIGNING": formatDate(new Date(), 'yyyy-MM-ddTHH:mm:ss.000+02:00', 'en-US').toString(),
          "SIGNING_TYPE": "STANDARD",
          "REASON_OPERATION": "INPUT",
          "EMPLACEMENT": "OUTSIDE_OFFICE",
          "COMPANY_ID": "MOVICODERS.COM",
          "WORKER_ID": credentials.name
        },
        "KEY": "R_ADD_SIGNING_1559030288228",
        "MOVELETKEYEXT": "/query",
        "INFO": {
          "DEV_TIME_ZONE": "+02:00"
      },
        "LOGIN": {
          "AUTHENTICATED": true,
          "EMAIL": credentials.name,
          "ROLE": "WORKER",
          "LANGUAGE": "es_ES",
          "COMPANY": {
            "NAME": "Movicoders",
            "COMPANY_ID": "MOVICODERS.COM"
          },
          "RESP_DUEL": "2BD1D8980CE40D657C48D6BA9330903D"
        },
        "MOVELETKEY": "TCM",
        "TRANSACTION_ID": "ADD_SIGNING"
      }
    };
  
  
  const headers:HttpHeaders  = new HttpHeaders();
  headers.set('content-type', 'application/json');

  return this.httpClient.post(url, body, {headers: headers})
  //.pipe(
    //flatMap(data => this.loginS2(data, credentials))
  //)
  ;


  }

  checkOut(credentials: User) : Observable<any>{
    //checkIn() : Observable<any>{
    let url = 'http://localhost:3000';

    let body: Object = {
      "method": "POST",
      "request": {
        "url": "https://demo.movilizer.com/MovilizerDistributionService/m2m?dataformat=JSONCorrect&deviceAddress=@backend-web@dphuesca.es&password=ajsw3xhu8s183"
      },
      "body": {
        "DATA": {
          "REASON_ID": "0",
          //"DATETIME_SIGNING": "2019-05-28T09:57:00.000+02:00",
          "DATETIME_SIGNING": formatDate(new Date(), 'yyyy-MM-ddTHH:mm:ss.000+02:00', 'en-US').toString(),
          "SIGNING_TYPE": "STANDARD",
          "REASON_OPERATION": "OUTPUT",
          "EMPLACEMENT": "OUTSIDE_OFFICE",
          "COMPANY_ID": "MOVICODERS.COM",
          "WORKER_ID": credentials.name
        },
        "KEY": "R_ADD_SIGNING_1559030288228",
        "MOVELETKEYEXT": "/query",
        "INFO": {
          "DEV_TIME_ZONE": "+02:00"
      },
        "LOGIN": {
          "AUTHENTICATED": true,
          "EMAIL": credentials.name,
          "ROLE": "WORKER",
          "LANGUAGE": "es_ES",
          "COMPANY": {
            "NAME": "Movicoders",
            "COMPANY_ID": "MOVICODERS.COM"
          },
          "RESP_DUEL": "2BD1D8980CE40D657C48D6BA9330903D"
        },
        "MOVELETKEY": "TCM",
        "TRANSACTION_ID": "ADD_SIGNING"
      }
    };
  
  
  const headers:HttpHeaders  = new HttpHeaders();
  headers.set('content-type', 'application/json');

  return this.httpClient.post(url, body, {headers: headers})
  //.pipe(
    //flatMap(data => this.loginS2(data, credentials))
  //)
  ;


  }


}

