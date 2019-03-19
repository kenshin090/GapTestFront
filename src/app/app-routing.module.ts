import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PoliciesComponent} from './policies/policies.component'
import {RegisterComponent} from './register/register.component'
import {ClientComponent} from './client/client.component'
import {LogInComponent} from './log-in/log-in.component'
import {MainComponent} from './main/main.component'
import {SuccesClientComponent } from './succes-client/succes-client.component'
import {SuccesPolicyComponent } from './succes-policy/succes-policy.component'

const routes: Routes = [
  { path: 'login', component: LogInComponent },  
  { path: 'register', component: RegisterComponent }, 
  { path: 'main', component: MainComponent,  children: [
    { path: 'client', component: ClientComponent },
    { path: 'policies', component: PoliciesComponent },
    { path: 'successclient', component: SuccesClientComponent },
    { path: 'successpolicies', component: SuccesPolicyComponent }
  ] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
