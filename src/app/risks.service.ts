import { Injectable } from '@angular/core';
import { RESOURCES } from './constants/Resources';
import { GlobalService } from './global.service';
import { RiskType } from './Entities/RiskType';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RisksService {

  private baseUrl  = RESOURCES.filter(obj => {
    return obj.Key === "UrlBase"
  })

  private riskUrl = this.baseUrl[0].Value + '/api/risk';

  constructor(private http: HttpClient,
              private globalService : GlobalService) { }

  getRisks(): Observable<RiskType[]>{   
    
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.globalService.getToken().Token);
    return this.http.get<RiskType[]>(this.riskUrl,{headers : headers});   
  }
}
