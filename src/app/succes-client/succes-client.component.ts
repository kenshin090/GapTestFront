import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-succes-client',
  templateUrl: './succes-client.component.html',
  styleUrls: ['./succes-client.component.css']
})
export class SuccesClientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Return(){
    this.router.navigate(['main/client'])
  }

}
