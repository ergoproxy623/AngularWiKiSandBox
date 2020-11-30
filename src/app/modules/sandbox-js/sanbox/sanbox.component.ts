import { Component, OnInit } from '@angular/core';
import * as sandbox from './../../../../../src/custom';
@Component({
  selector: 'app-sanbox',
  templateUrl: './sanbox.component.html',
  styleUrls: ['./sanbox.component.scss']
})
export class SanboxComponent implements OnInit {
    editorOptions = {theme: 'vs-dark', language: 'javascript'};
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
      sandbox.runCode();
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
}
