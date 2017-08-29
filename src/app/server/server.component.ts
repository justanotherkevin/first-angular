import { Component } from "@angular/core";

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html"
})

export class ServerComponent {
    // you can use TS and set the type
    serverId: number = 10;
    // or you don't have to
    serverStatus = 'offline';
}
