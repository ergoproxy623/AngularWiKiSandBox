import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-singleton',
    templateUrl: './singleton.component.html',
    styleUrls: ['./singleton.component.scss']
})
export class SingletonComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        const newDatabase = new Database({data: 'data'});
        const otherInstancesDatabase = [new Database({data2: 'data2'}), new Database({data3: 'data3'})];
        console.log(newDatabase, otherInstancesDatabase);
    }

}

export class Database implements IDatabase {
    protected static instance: Database = new Database({data: 'data'});
    data: any;

    constructor(data) {
        if (Database.instance) {
            return Database.instance;
        }
        Database.instance = this;
        this.data = data;
    }

    getData() {
        return this.data;
    }
}

export interface IDatabase {
    data: any;
}
