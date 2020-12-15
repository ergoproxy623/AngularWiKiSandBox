import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
@Component({
  selector: 'app-sanbox',
  templateUrl: './sanbox.component.html',
  styleUrls: ['./sanbox.component.scss']
})
export class SanboxComponent implements OnInit, AfterViewInit {
    @ViewChild('iframe') iframe;
    editorOptions = {theme: 'vs-dark', language: 'javascript'};
    iframeWindow: any;
    iframeDoc: any;

    code = 'let adminName = \'Arthur\';\n' +
        'let newAdmin = \'\'\n' +
        '\n' +
        'function isAdmin() {\n' +
        ' return  adminName === \'Arthur\'?  true : false\n' +
        '}\n' +
        '\n' +
        'function checkPermissionDecorator(f) {\n' +
        '  return function() {\n' +
        '    if (isAdmin()) {\n' +
        '      return f.apply(this, arguments);\n' +
        '    }\n' +
        '    alert( \'Недостаточно прав\' );\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'function save(name) {\n' +
        '    newAdmin = name\n' +
        '}\n' +
        '\n' +
        'const saveP = checkPermissionDecorator(save);\n' +
        'saveP(\'Arthur\')\n' +
        'console.log(newAdmin)';
  constructor() { }

  ngOnInit(): void {
  }

    // let adminName = 'Arthur';
    // let newAdmin = ''
    //
    // function isAdmin() {
    //     return  adminName === 'Arthur'?  true : false
    // }
    //
    // function checkPermissionDecorator(f) {
    //     return function() {
    //         if (isAdmin()) {
    //             return f.apply(this, arguments);
    //         }
    //         alert( 'Недостаточно прав' );
    //     }
    // }
    //
    // function save(name) {
    //     newAdmin = name
    // }
    //
    // const saveP = checkPermissionDecorator(save);
    // saveP('Arthur')
    // console.log(newAdmin)

    ngAfterViewInit() {
        window['hello'] =  () => {
            alert('hello from owner!');
        };

        const iframe = document.getElementById('frameID');
        this.iframeWindow = iframe['contentWindow'] || iframe;
        this.iframeDoc = iframe['contentDocument'] || this.iframeWindow.document;
    }

    runCode() {
        this.iframeDoc.open();
        this.iframeDoc.write('iframe here 2');
        this.iframeDoc.write("<script>" + this.code + "</script>");
        this.iframeDoc.write("<script>" + '' + "</script>");
        this.iframeDoc.close();
        const body = this.iframeDoc.querySelector('body');
        console.log(body);
        console.log(this.iframeDoc);
    }

}
