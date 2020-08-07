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
import { HttpClientModule } from '@angular/common/http';
//importan las rutas
import {Routes, RouterModule} from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { FormProductComponent } from './form-product/form-product.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormRegComponent } from './form-reg/form-reg.component';

//configuracion de las rutas
const routes : Routes = [

  { path: 'form-reg', component: FormRegComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'form-product', component:FormProductComponent },
  { path: 'form-group', component: FormGroupComponent },
  //cuando no  haya una ruta definida va ocupar el comp. inicio
  { path: '', component:InicioComponent, pathMatch: 'full' },
  //cualquier ruta desconocida va redirijir al inicio
  { path: '**', redirectTo: '/', pathMatch:'full' }

];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    CuerpoComponent,
    AdminComponent,
    FormGroupComponent,
    InicioComponent,
    FormProductComponent,
    UsuariosComponent,
    FormRegComponent
    
  ],
  imports: [
    BrowserModule,
    //se importa el reactive
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
