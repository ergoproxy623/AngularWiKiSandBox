import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-adapter',
    templateUrl: './adapter.component.html',
    styleUrls: ['./adapter.component.scss']
})
export class AdapterComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        const adapter = new CalcAdapter();
        console.log(adapter.operation(1, 2 , 'add'));
        console.log(adapter.operation(1, 2 , 'sub'));
        console.log(adapter.operation(1, 2 , 'zero'));
    }

}

export class OldCalc {
    operations(t1, t2, operation) {
        switch (operation) {
            case 'add':
                return t1 + t2;
            case 'sub':
                return t1 - t2;
            default:
                return NaN;
        }
    }
}

export class NewCalc {
    add(t1, t2) {
        return t1 + t2;
    }
    sub(t1, t2) {
        return t1 - t2;
    }
}

export class CalcAdapter {
    calc: any;

    constructor() {
        this.calc = new NewCalc();
    }

    operation(t1, t2, operation: string) {
        switch (operation) {
            case 'add':
                return this.calc.add(t1, t2);
            case 'sub':
                return this.calc.sub(t1, t2);
            default:
                return NaN;
        }
    }
}
