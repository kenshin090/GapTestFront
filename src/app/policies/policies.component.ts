import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../global.service'
import { PoliciesService } from '../policies.service';
import { Policy } from '../Entities/Policy';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {

  panelOpenState = false;

  constructor(private policiesService : PoliciesService) { }


  ngOnInit() {
  
  }


}
