import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'project-for-tests';
    linkArr: any[] = [
        {
            title: 'Form',
            linkArr: [
                {link: '/forms', title: 'Reactive Forms'},
            ]
        },
        {
            title: 'Structure',
            linkArr: [
                {link: '/structure', title: 'Structure'},
                {link: '/structure/directives', title: 'Directives'},
                {link: '/structure/pipes', title: 'Pipes'},
                {link: '/structure/bunding', title: 'Bunding'},
            ]
        },
        {
            title: 'DOM-Node',
            linkArr: [
                {link: '/dom', title: 'DOM'},
            ]
        },
        {
            title: 'Animation',
            linkArr: [
                {link: '/animation', title: 'Animation'},
            ]
        },
        {
            title: 'Patterns',
            linkArr: [
                {link: '/patterns', title: 'Patterns'},
                {link: '/patterns/factory', title: 'Factory'},
                {link: '/patterns/prototype', title: 'Proto'},
                {link: '/patterns/singleton', title: 'Singleton'},
                {link: '/patterns/adapter', title: 'Adapter'},
                {link: '/patterns/decorator', title: 'Decorator'},
                {link: '/patterns/facade', title: 'Facade'},
            ]
        },
        {
            title: 'Zone',
            linkArr: [
                {link: '/zone', title: 'Zone'},
            ]
        },
        {
            title: 'S.O.L.I.D',
            linkArr: [
                {link: '/solid', title: 'SRP'},
                {link: '/solid/o', title: 'Open-Close'},
                {link: '/solid/l', title: 'Liscov Substitution'},
                {link: '/solid/i', title: 'Interface segregation'},
                {link: '/solid/d', title: 'Bunding'},
            ]
        },
        {
            title: 'RX-JS',
            linkArr: [
                {link: '/rxjs', title: 'RX-JS'},
            ]
        },
        {
            title: 'Sandbox',
            linkArr: [
                {link: '/sandbox', title: 'Sandbox'},
            ]
        },
        {
            title: 'Linq',
            linkArr: [
                {link: '/linq', title: 'Linq'},
            ]
        },
        {link: '/sheduler', title: 'Sheduler', linkArr: []},
    ];
}
