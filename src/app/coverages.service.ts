import { Injectable } from '@angular/core';
import { RESOURCES } from './constants/Resources';
import { CoverageType } from './Entities/CoverageType';
import { GlobalService } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoveragesService {

  private baseUrl  = RESOURCES.filter(obj => {
    return obj.Key === "UrlBase"
  })

  private coveragesUrl = this.baseUrl[0].Value + '/api/Coverages';

  constructor(private http: HttpClient,
              private globalService : GlobalService) { }

  getCoverages(): Observable<CoverageType[]>{   
    debugger;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.globalService.getToken().Token);
    return this.http.get<CoverageType[]>(this.coveragesUrl,{headers : headers});   
  }
}
