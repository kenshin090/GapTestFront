import { Injectable } from '@angular/core';
import { RESOURCES } from './constants/Resources';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Client } from './Entities/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private baseUrl  = RESOURCES.filter(obj => {
    return obj.Key === "UrlBase"
  })

  private clientUrl = this.baseUrl[0].Value + '/api/clients';

  constructor(private http: HttpClient,
              private globalService : GlobalService) { }

  getClients(): Observable<Client[]>{  
    
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.globalService.getToken().Token);
    return this.http.get<Client[]>(this.clientUrl,{headers : headers});   
  }

  saveClient(client:Client):  Promise<Client>{ 
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.globalService.getToken().Token);    
    return this.http.post<Client>(this.clientUrl,client,{headers : headers}).toPromise()
    .then(res => { return res })  
    
  }
}
