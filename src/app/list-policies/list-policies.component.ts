import { Component, OnInit } from '@angular/core';
import { PoliciesService } from '../policies.service';
import { Policy } from '../Entities/Policy';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-list-policies',
  templateUrl: './list-policies.component.html',
  styleUrls: ['./list-policies.component.css']
})
export class ListPoliciesComponent implements OnInit {

  constructor(private policiesService : PoliciesService,
              private globalService : GlobalService) { }

  ActualPolicies : Policy[]

  ngOnInit() {
    this.policiesService.getPolicies().subscribe((response:Policy[]) => this.FillPolicies(response))
  }

  FillPolicies(response){
    this.ActualPolicies = response;
  }


}
