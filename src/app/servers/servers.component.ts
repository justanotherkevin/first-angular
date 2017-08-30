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
  inputValue = "one or two way binding";
  serverCreated = false;
  servers = ['test server 1', 'test server 2']

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000 );
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.inputValue);
    this.serverCreateStatus = "New Server Created";
  }

  onUpdateInputField( event: Event ) {
    this.inputValue = (<HTMLInputElement>event.target).value;
  }
}
