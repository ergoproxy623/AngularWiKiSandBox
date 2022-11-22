import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserDto } from "../../classDTO/userDto/userDto";

@Injectable()
export class FireServiceService {
    items: Observable<UserDto[]>;

    constructor() { }

    addUser(user: UserDto) { }

    getForID() { }
}
