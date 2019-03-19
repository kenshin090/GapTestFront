import { Injectable } from '@angular/core';
import { RESOURCES } from './constants/Resources';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Policy } from './Entities/Policy';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoliciesService {

  private baseUrl  = RESOURCES.filter(obj => {
    return obj.Key === "UrlBase"
  })

  private policiesUrl = this.baseUrl[0].Value + '/api/Policies';

  constructor(private http: HttpClient,
              private globalService : GlobalService) { }

  getPolicies(): Observable<Policy[]>{   
    debugger;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.globalService.getToken().Token);
    return this.http.get<Policy[]>(this.policiesUrl,{headers : headers});   
  }

  savePolicy(policy:Policy):  Promise<Policy>{   
    debugger;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.globalService.getToken().Token);    
    return this.http.post<Policy>(this.policiesUrl,policy,{headers : headers}).toPromise()
    .then(res => { return res })  
    
  }


}
