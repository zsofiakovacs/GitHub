import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {

   }

   login(credentials: User) : Observable<any>{
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
   }

}

