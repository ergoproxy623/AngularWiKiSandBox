import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-i-of-solid',
    templateUrl: './i-of-solid.component.html',
    styleUrls: ['./i-of-solid.component.scss']
})
export class IOfSolidComponent implements OnInit {
    user: User = new User();
    plan: Plan = new Plan();
    constructor() {
    }

    ngOnInit(): void {
        console.log(this.user.user);
        this.user.setUser({name: 'Arthur', age: 32});
        console.log(this.user.user);

        console.log(this.plan);
        this.plan.setPlan({name: 'fix', price: 200});
        console.log(this.plan);
    }

}

export interface UserDTO {
    name: string;
    age: number;
}

export interface SetUser {
    setUser(user: UserDTO): void;
}

export class User implements SetUser {
    user: UserDTO;
    setUser(user: UserDTO): void {
        this.user = user;
    }
}

export interface PlanDTO {
    procedures: PlanItem[];
}

export interface PlanItem {
    name: string;
    price: number;
}

export interface SetPlan {
    setPlan(item: PlanItem): void;
}

export class Plan implements SetPlan {
    plan: PlanDTO;

    setPlan(item: PlanItem): void {
        this.plan.procedures.push(item);
    }
}
