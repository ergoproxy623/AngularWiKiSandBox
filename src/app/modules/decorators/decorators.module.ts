import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DecoratorsSandboxComponent } from "./decorators-sandbox/decorators-sandbox.component";
import { DecoratorsRoutingModule } from "./decorators-routing.module";


@NgModule({
    declarations: [DecoratorsSandboxComponent],
    imports: [
        CommonModule,
        DecoratorsRoutingModule
    ]
})
export class DecoratorsModule {
}
