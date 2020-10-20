import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-for-tests';
  linkArr: any[] = [{link: '/', title: 'All'},
                    {link: '/form', title: 'Form'},
                    {link: '/methode', title: 'Method'},
                    {link: '/structure', title: 'Structure'},
                    {link: '/tests', title: 'Tests'},
                    {link: '/style', title: 'Style'},
                    ];
}
