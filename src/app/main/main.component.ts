import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  

  constructor(private globalService: GlobalService,  private router: Router) { }

  ngOnInit() {
    if(this.globalService.getToken() === undefined){
      this.router.navigate(['/'])
    }
  }


  display() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

}
