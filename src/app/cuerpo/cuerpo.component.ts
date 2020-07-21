import { Component, OnInit } from '@angular/core';
import { ArchivosJSService } from './../archivos-js.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  constructor( private _cargaScript:ArchivosJSService) { 
    _cargaScript.cargar(["js/app"]);
  }

  ngOnInit(): void {
  }

}
