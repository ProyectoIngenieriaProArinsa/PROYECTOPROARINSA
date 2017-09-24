import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';

import{ClientesService} from './services/clientes.service';
import { MaterializeModule } from 'angular2-materialize';
import { MainPageComponent } from './Components/main-page/main-page.component';

const appRoutes: Routes = [
  {path:'cliente', component: RegisterComponent},
  {path:'Inicio', component: MainPageComponent}
  // {path:'register', component: RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
