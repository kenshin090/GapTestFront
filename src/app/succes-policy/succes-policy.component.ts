import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-succes-policy',
  templateUrl: './succes-policy.component.html',
  styleUrls: ['./succes-policy.component.css']
})
export class SuccesPolicyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Return(){
    this.router.navigate(['main/policy'])
  }

}
