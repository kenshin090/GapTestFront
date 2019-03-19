import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Policy } from '../Entities/Policy';
import { CoveragesService } from '../coverages.service';
import { CoverageType } from '../Entities/CoverageType';
import { PoliciesCoverages } from '../Entities/PoliciesCoverages';
import { PoliciesService } from '../policies.service';
import { RiskType } from '../Entities/RiskType';
import { RisksService } from '../risks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-policy',
  templateUrl: './new-policy.component.html',
  styleUrls: ['./new-policy.component.css']
})
export class NewPolicyComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourFormGroup: FormGroup;
  policy: Policy = new Policy;

  panelOpenState: boolean = false;

  CoverageTypes : CoverageType[];
  RiskTypes : RiskType[];

  PolicyCoverage : PoliciesCoverages = new PoliciesCoverages;
  

  constructor(private _formBuilder: FormBuilder,
              private coveragesService : CoveragesService,
              private risksService : RisksService,
              private policiesService : PoliciesService,
              private router: Router) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.fourFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    
    this.getCoverageTypes();
    this.getRiskTypes();


  }

  getCoverageTypes(){
    this.coveragesService.getCoverages().subscribe((coverages : CoverageType[]) => {this.fillCoverageTypes(coverages)});
  }

  fillCoverageTypes(coverages : CoverageType[]){
    this.CoverageTypes = coverages;
  }

  getRiskTypes(){
    this.risksService.getRisks().subscribe((risks : RiskType[]) => {this.fillRiskTypes(risks)});
  }

  fillRiskTypes(risks : RiskType[]){
    this.RiskTypes = risks;
  }

  addCoverage(idCoverage: number){
    debugger;
    if(this.policy.Coverages === undefined){
      this.policy.Coverages = []
    }
    this.PolicyCoverage.CoverageTypeId = idCoverage;
    this.policy.Coverages.push(this.PolicyCoverage)

    this.PolicyCoverage =  new PoliciesCoverages; 

    this.panelOpenState = !this.panelOpenState
  }

  setRisk(idRisk: number){    
    debugger;
    this.policy.RiskTypeId=idRisk;
  }

  Save(){
    debugger
    this.policiesService.savePolicy(this.policy);
    this.router.navigate(['/main'])

  }

}
