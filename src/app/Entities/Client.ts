import { BuiltinMethod } from '@angular/compiler';
import { PoliciesCoverages } from './PoliciesCoverages';
import { PolicyClient } from './PolicyClient';

export class Client {
    Id: number;   
    Address: string;  
    Email: string;  
    LastName: string;   
    Name: string;  
    NUIP: number;  
    Phone: string; 
    Policies :  PolicyClient[]
}

   