import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { YellowMapsComponent } from "./yellow-maps/yellow-maps.component";
import { MapsRoutingModule } from "./maps-routing.module";


@NgModule({
    declarations: [
        YellowMapsComponent
    ],
    imports: [
        CommonModule,
        MapsRoutingModule
    ],
})
export class MapsModule {
}
