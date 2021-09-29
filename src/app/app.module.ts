import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarComponent} from './components/car/car.component';
import {RecambiosModule} from './recambios/recambios.module';
import {NeumaticosComponent} from './recambios/neumaticos/neumaticos.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {DataHandlerService} from "./service/data-handler.service";


const appRoutes: Routes = [

  {path: 'products', component: CarComponent},
  {path: 'about', component: ContactsComponent},
  {path: "orders", component: NeumaticosComponent}
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
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [DataHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
