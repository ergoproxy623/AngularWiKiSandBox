import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PatternsComponent } from "./patterns/patterns.component";
import { PaternsRoutingModule } from "./paterns-routing.module";
import { FactoryComponent } from "./factory/factory.component";
import { PrototypeComponent } from "./prototype/prototype.component";
import { SingletonComponent } from "./singleton/singleton.component";
import { AdapterComponent } from "./adapter/adapter.component";
import { DecoratorComponent } from "./decorator/decorator.component";
import { FacadeComponent } from "./facade/facade.component";


@NgModule({
    declarations: [PatternsComponent, FactoryComponent, PrototypeComponent, SingletonComponent, AdapterComponent, DecoratorComponent, FacadeComponent],
    imports: [
        CommonModule,
        PaternsRoutingModule
    ]
})
export class PatternsModule {
}
