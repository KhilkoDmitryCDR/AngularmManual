import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NeumaticosComponent} from './neumaticos/neumaticos.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    NeumaticosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NeumaticosComponent
  ]
})
export class RecambiosModule { }
