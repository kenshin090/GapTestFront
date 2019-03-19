import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {User} from './Entities/User';
import {UserToken} from './Entities/UserToken';

import { RESOURCES} from './constants/Resources'


import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl  = RESOURCES.filter(obj => {
    return obj.Key === "UrlBase"
  })

  private authUrl = this.baseUrl[0].Value + '/api/Authentication';

  constructor(private http: HttpClient) { }

  logIn(user: User): Observable<UserToken> {
    
     return this.http.post<UserToken>(this.authUrl,user);
    
    
  }
}
