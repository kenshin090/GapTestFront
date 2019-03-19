import { Injectable } from '@angular/core';
import {UserToken} from './Entities/UserToken'

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  actualToken : UserToken;

  constructor() { }

  setToken(token:UserToken){
    this.actualToken = token
  }

  getToken(){
    return this.actualToken;
  }
}
