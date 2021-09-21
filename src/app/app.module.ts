import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { RecambiosModule } from './recambios/recambios.module';
import {NeumaticosComponent} from './recambios/neumaticos/neumaticos.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const appRoutes: Routes= [
  {path: '',component:AppComponent},
  {path: 'products', component:CarComponent},
  {path: 'about', component:ContactsComponent},
  {path: "orders", component:NeumaticosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ContactsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RecambiosModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
