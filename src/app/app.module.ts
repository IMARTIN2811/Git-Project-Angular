import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//inicio servicio, se agrega el servicio de los archivos js
import { ArchivosJSService } from './archivos-js.service';
//fin servicio
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { AdminComponent } from './admin/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    CuerpoComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ArchivosJSService
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
