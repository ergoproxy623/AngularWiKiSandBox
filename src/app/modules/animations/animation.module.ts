import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationComponent } from './animations/animation.component';
import { AnimationsRoutingModule } from './animations-routing.module';


@NgModule({
    declarations: [AnimationComponent],
    imports: [
        CommonModule,
        AnimationsRoutingModule
    ]
})
export class AnimationModule {
}
