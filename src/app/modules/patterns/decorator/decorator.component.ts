import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-decorator',
    templateUrl: './decorator.component.html',
    styleUrls: ['./decorator.component.scss']
})
export class DecoratorComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        const s1 = aws(new Server('12.34.56.78', 8080));
        console.log(s1.isAws);
        console.log(s1.awsInfo());
    }

}


export class Server {
    constructor(private ip, private port) {
    }

    get url() {
        return `http://${this.ip}:${this.port}`;
    }
}

export function aws(server) {
    server.isAws = true;
    server.awsInfo = () => server.url;
    return server;
}
