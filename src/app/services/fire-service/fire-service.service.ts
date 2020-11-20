import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";

@Injectable({
  providedIn: 'root'
})
export class FireServiceService {

    itemsCollection: AngularFireList<any>;
    items: Observable<any[]>;

    constructor(public db: AngularFireDatabase) {
        this.itemsCollection  = this.db.list('users') as AngularFireList<any>;
        console.log(this.itemsCollection);
        this.items = this.itemsCollection.valueChanges() as Observable<User[]>;
    }

    add() {
        this.itemsCollection.push({name: 'Tom', age: '1'});
    }
}

export class User {
    $key?: any;
    name?: string;
    age?: number;
}
