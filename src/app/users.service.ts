import { Injectable } from '@angular/core';
import { RESOURCES } from './constants/Resources';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './Entities/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl  = RESOURCES.filter(obj => {
    return obj.Key === "UrlBase"
  })

  private policiesUrl = this.baseUrl[0].Value + '/api/User';

  constructor(private http: HttpClient,
              private globalService : GlobalService) { }

  
  saveUser(user:User):  Promise<User>{   
    
    let headers = new HttpHeaders();    
    return this.http.post<User>(this.policiesUrl,user).toPromise()
    .then(res => { return res })  
    
  }
}
