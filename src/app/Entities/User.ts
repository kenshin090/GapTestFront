import { BuiltinMethod } from '@angular/compiler';
import { UserPermission } from './UserPermission';

export class User {
    
    CreatedDate: Date;
    Email: string;
    Id: number;
    Password: string;
    CreatorEmail: string;
    Permissions : UserPermission[]
}

