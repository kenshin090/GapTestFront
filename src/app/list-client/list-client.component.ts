import { Component, OnInit } from '@angular/core';
import { Client } from '../Entities/Client';
import { GlobalService } from '../global.service';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  constructor(private clientsService : ClientsService,
              private globalService : GlobalService) { }

ActualClients : Client[]

Selected: Client = new Client;

ngOnInit() {
this.clientsService.getClients().subscribe((response:Client[]) => this.FillClients(response))
}

FillClients(response){
this.ActualClients = response;
}

SelectClient(client : Client){
  this.Selected = client;
}


}
