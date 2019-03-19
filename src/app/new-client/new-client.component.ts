import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Client } from '../Entities/Client';
import { PoliciesService } from '../policies.service';
import { GlobalService } from '../global.service';
import { Policy } from '../Entities/Policy';
import { ClientsService } from '../clients.service';
import { PolicyClient } from '../Entities/PolicyClient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  newClient : Client = new Client; 
  ActualPolicies : Policy[]
  newPolicy : PolicyClient = new PolicyClient();

  constructor(private policiesService : PoliciesService,
              private clientService : ClientsService,
              private globalService : GlobalService,
              private router: Router,
              private cd: ChangeDetectorRef) { }



  ngOnInit() {
    this.policiesService.getPolicies().subscribe((response:Policy[]) => this.FillPolicies(response))

  }

  FillPolicies(response){
    this.ActualPolicies = response;
  }

  addPolicy(idPolicy : number){
    if(this.newClient.Policies === undefined){
      this.newClient.Policies = []
    }

    this.newPolicy.PolicyId = idPolicy;

    this.newClient.Policies.push(this.newPolicy)

    this.newPolicy=  new PolicyClient;
  }

  save(){
    this.clientService.saveClient(this.newClient);
    this.router.navigate(['main/successclient'])
  }


}
