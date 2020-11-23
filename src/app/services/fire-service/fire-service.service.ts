import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {UserDto} from '../../classDTO/userDto/userDto';

@Injectable({
  providedIn: 'root'
})
export class FireServiceService {

    itemsCollection: AngularFireList<any>;
    items: Observable<UserDto[]>;

    constructor(public db: AngularFireDatabase) {
        this.itemsCollection  = this.db.list('users') as AngularFireList<any>;
        this.items = this.itemsCollection.valueChanges() as Observable<UserDto[]>;
    }

    addUser(user: UserDto) {
        this.itemsCollection.push(user);
    }
}
