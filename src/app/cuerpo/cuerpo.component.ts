import { Component, OnInit } from '@angular/core';
//Se crear el form control
import { FormControl, Validator, Validators } from '@angular/forms';
//Fin del form control
//import de debounceTime permite colocar un tiempo de inactividad de cada valor
import { debounceTime } from 'rxjs/operators';

declare var name: any;

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  //se crea el controlador
  EmailCtrl = new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(4)]);

  constructor() { 
    //debounceTime permite colocar un tiempo de inactividad de cada valor
    this.EmailCtrl.valueChanges.pipe(debounceTime(500)
    ) 
    .subscribe(value =>{
      console.log(value);
    });
  }

  ngOnInit(): void {
    //new name();
  }

  //permite obtener el valor del input
  getEmail(event: Event){
    event.preventDefault();
    console.log(this.EmailCtrl.value);
  }
}
