import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../user';
import {Md5} from 'ts-md5/dist/md5';
import { flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {

  }

  /*login(credentials: User) : Observable<any>{
    let url = 'https://demo.movilizer.com/MovilizerDistributionService/m2m?dataformat=JSONCorrect&deviceAddress=@backend@dphuesca.es';
    url = url.concat(`&password=qhxvnn70bsj22`);
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
    };

    const headers:HttpHeaders  = new HttpHeaders();
    headers.set('content-type', 'application/json');
    
    return this.httpClient.post(url, body, {headers: headers});
  }*/

   loginS1(credentials: User) : Observable<any>{
    let url = 'http://localhost:3000';
    
    let body: Object = {
      "method": "POST",
      "request": {
        "url": "https://demo.movilizer.com/MovilizerDistributionService/m2m?dataformat=JSONCorrect&deviceAddress=@backend@dphuesca.es&password=qhxvnn70bsj22"
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

    //const md5 = new Md5();
    //console.log(md5.appendStr('hello').end());

    let passCif:string  = Md5.hashStr(pass.concat(salt)).toString().toUpperCase();
    let respDuel:string  = Md5.hashStr(passCif.concat(duel)).toString().toUpperCase();
    
    console.log(passCif);
    console.log(respDuel);
    
    let body: Object = {
      "method": "POST",
      "request": {
        "url": "https://demo.movilizer.com/MovilizerDistributionService/m2m?dataformat=JSONCorrect&deviceAddress=@backend@dphuesca.es&password=qhxvnn70bsj22"
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
}

