import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'project-for-tests';
    linkArr: any[] = [{link: '/', title: 'Login', linkArr: []},
        {
            title: 'Form',
            linkArr: [
                {link: '/forms', title: 'Reactive Forms'},
            ]
        },
        {link: '/methode', title: 'Method', linkArr: []},
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
        {link: '/tests', title: 'Tests', linkArr: []},
        {link: '/style', title: 'Style', linkArr: []},
        {link: '/sheduler', title: 'Sheduler', linkArr: []},
    ];
}
