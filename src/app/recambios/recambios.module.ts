import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NeumaticosComponent} from './neumaticos/neumaticos.component';
import {FormsModule} from "@angular/forms";
import {MercanciaService} from "./mercancia.service";



@NgModule({
  declarations: [
    NeumaticosComponent
  ],
  providers: [MercanciaService],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NeumaticosComponent
  ]
})
export class RecambiosModule { }
