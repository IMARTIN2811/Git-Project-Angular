import { Component, OnInit } from '@angular/core';
//se hacen los import de los formgroup
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  
  //instancia o atributo para controlar el form
  form: FormGroup;

  //se usa para realizar peticiones internos, no depende de terceros
  constructor() { 
    //ejecuta el metodo
    this.buildForm();
  }

  // se utiliza para peticions de datos externos en el server
  ngOnInit(): void {
  }

  public buildForm(){
    //hace la instancia del form 
    this.form = new FormGroup({
      //valor es igual a FormControl que tiene dos parametros de entrada, valor inicial y el array de validacion
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.email]),
      text: new FormControl('', [Validators.maxLength(200)]),
      category: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),

    });

    //this.form.valueChanges
    //.pipe(debounceTime(500))
    //.subscribe(value =>{
    //  console.log(value);
    //});
  }
  
  save(event: Event) {
    event.preventDefault();
    const value = this.form.value;
    console.log(value);
  }

}
