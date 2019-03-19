import { Component, OnInit } from '@angular/core';
import { User } from '../Entities/User';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { UserPermission } from '../Entities/UserPermission';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser : User = new User;
  permissions : UserPermission[];
  permissionAdmin : UserPermission = new UserPermission;
  constructor(private userServices : UsersService,
              private router: Router) { }

  ngOnInit() {
  }

  save(){   
    debugger
    this.permissionAdmin.PermissionsId = 1;
    if(this.permissions === undefined){
      this.permissions = [];
    }
    this.permissions.push(this.permissionAdmin);
    this.newUser.Permissions = this.permissions;
    this.userServices.saveUser(this.newUser);
    this.router.navigate(['login']);
  }

}
