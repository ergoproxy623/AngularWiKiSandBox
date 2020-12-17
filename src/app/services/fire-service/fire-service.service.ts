import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {UserDto} from '../../classDTO/userDto/userDto';
import {map} from "rxjs/operators";

@Injectable()
export class FireServiceService {

    itemsCollection: AngularFireList<any>;
    items: Observable<UserDto[]>;

    constructor(public db: AngularFireDatabase) {
        this.itemsCollection  = this.db.list('users');
        this.items = this.itemsCollection.snapshotChanges()
            .pipe(map((users: any[]) => users.map(user => ({ id: user.key, ...user.payload.val() }))));
    }

    addUser(user: UserDto) {
        this.itemsCollection.push(user);
    }

    getForID() {
        console.log(this.itemsCollection);
    }
}
