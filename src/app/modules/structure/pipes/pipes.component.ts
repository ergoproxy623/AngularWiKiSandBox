import { GetUser, GetUsers } from "../../../store/actions/user.action";
import { Component, ComponentFactoryResolver, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";
import { TestRequestService } from "../../../services/test-request.service";
import { FireServiceService } from "../../../services/fire-service/fire-service.service";
import * as momentTZ from "moment-timezone";
import { IAppState } from "../../../store/state/app.state";
import { select, Store } from "@ngrx/store";
import { ActivatedRoute, Router } from "@angular/router";
import { selectSelectedUser, selectUserList } from "../../../store/selectors/user.selectors";
import { IUserDto } from "../../../classDTO/userDto/userDto";
import { IConfig } from "../../../classDTO/config/config,interface";
import { selectedConfig } from "../../../store/selectors/config.selectors";
import { GetConfig, SetConfig } from "../../../store/actions/config.action";
import { selectSelectedId } from "../../../store/selectors/router-state.selectors";
import { ModalComponent } from "../../../shared/base-elements/modal/modal.component";
import { ResolveDirective } from "../../../directive/resolve.directive";
import { FaqReadControllerService } from "../../../api/services/faq-read-controller.service";

@Component({
    selector: "app-pipes",
    templateUrl: "./pipes.component.html",
    styleUrls: ["./pipes.component.scss"]
})
export class PipesComponent implements OnInit {
    tests = [0.12, 1.234234, 2.324534, 545645.5675, 7.23423];
    date = new Date();
    obj = {
        name: "JSON",
        line: 2
    };

    users: any[] = [];
    p: Promise<string> = new Promise<string>(resolve => {
        setTimeout(() => {
            resolve("Promise done");
        }, 3000);
    });

    o: Observable<string> = new Observable<string>(observer => {
        setTimeout(() => {
            observer.next("Observable next for 5 sec.");
        }, 5000);
        setTimeout(() => {
            observer.next("Observable next for 7 sec.");
            observer.complete();
        }, 7000);
    });

    users$: Observable<IUserDto[]> = this.store.pipe(select(selectUserList));
    user$: Observable<IUserDto> = this.store.pipe(select(selectSelectedUser));
    config$: Observable<IConfig> = this.store.pipe(select(selectedConfig));
    store$: Observable<any> = this.store.pipe(select(selectSelectedId));
    @ViewChild(ResolveDirective) resolveDir: ResolveDirective;

    constructor(
        private usersService: TestRequestService,
        private fireService: FireServiceService,
        private store: Store<IAppState>,
        private router: Router,
        private activeRoute: ActivatedRoute,
        private resolver: ComponentFactoryResolver,
        private faqReadController: FaqReadControllerService
    ) {
    }

    ngOnInit(): void {
        this.faqReadController.findAllFAQCategoriesUsingGETResponse(true)
            .pipe()
            .subscribe( r => {
                console.log(r);
            })
        this.store.dispatch(new GetUsers());
        this.store.dispatch(new GetConfig());
        setTimeout(() => {
            this.store.dispatch(new SetConfig({ adminName: "Arthur", premissions: ["edit"] }));
        }, 5000);

        console.log(this.activeRoute.children);
        console.log(this.activeRoute.parent);

        console.log(momentTZ.tz.guess());
        console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
        this.usersService.getUsers().subscribe(res => {
            this.users = res.data;
        });
        this.activeRoute.data.subscribe(data => {
            console.log(data.users);
        });
        console.log(this.activeRoute.snapshot.data.users);

        this.fireService.items.subscribe(res => {
            console.log(res);
        });

    }

    showModal() {
        this.store.dispatch(new GetUser(1));
        const modal = this.resolver.resolveComponentFactory(ModalComponent);
        const component = this.resolveDir.containerRef.createComponent(modal);
        component.instance.title = "New title";
        component.instance.close.subscribe(() => {
            this.resolveDir.containerRef.clear();
        });
    }
}
