import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // you can point the html template in-line by template : templateUrl
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreateStatus = "No Server Created";

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000 );
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreateStatus = "New Server Created";
  }

}
