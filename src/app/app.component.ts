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
            title: 'Animation',
            linkArr: [
                {link: '/animation', title: 'Animation'},
            ]
        },
        {
            title: 'Patterns',
            linkArr: [
                {link: '/patterns', title: 'Patterns'},
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
