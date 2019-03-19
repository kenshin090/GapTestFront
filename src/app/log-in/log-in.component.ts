import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

import {User} from '../Entities/User';
import {UserToken} from '../Entities/UserToken';
import {AuthenticationService} from '../authentication.service'
import {GlobalService} from '../global.service'
import { debug } from 'util';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user: User = new User;
  token: UserToken;


  constructor(private authService : AuthenticationService,
              private globalService : GlobalService,    
              private router: Router) { }

  ngOnInit() {
  }

  logIn(){    
    this.authService.logIn(this.user).subscribe((tokenData: UserToken) => {this.redirectMain(tokenData)})    
  }

  redirectMain(tokenData: UserToken){    
    this.token = tokenData;
    this.globalService.setToken(this.token);
    this.router.navigate(['/main/policies'])

  }

}
