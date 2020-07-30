import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { AdminComponent } from './admin/admin/admin.component';
//Se agrega el import para utilizar los forms reactivos(Form control)
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroupComponent } from './form-group/form-group.component';
//importan las rutas
import {Routes, RouterModule} from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

const routes : Routes = [
  {path: 'form-group', component: FormGroupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    CuerpoComponent,
    AdminComponent,
    FormGroupComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    //se importa el reactive
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
