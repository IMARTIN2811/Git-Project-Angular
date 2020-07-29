import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { AdminComponent } from './admin/admin/admin.component';
//Se agrega el import para utilizar los forms reactivos(Form control)
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    CuerpoComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
