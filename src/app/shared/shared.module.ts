import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardItemComponent} from './base-elements/card-item/card-item.component';
import {FilterPipe} from '../modules/structure/pipes/filter.pipe';



@NgModule({
  declarations: [
      CardItemComponent,
      FilterPipe,
  ],
  imports: [
    CommonModule,
  ],
    exports: [
        CardItemComponent,
        FilterPipe
    ],
})
export class SharedModule {

}
