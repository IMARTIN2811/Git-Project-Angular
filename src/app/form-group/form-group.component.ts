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
  constructor(
    private formBuider: FormBuilder
  ) { 
    //ejecuta el metodo
    this.buildForm();
  }

  // se utiliza para peticions de datos externos en el server
  ngOnInit(): void {
  }

  public buildForm(){
    //hace la instancia del form 
    this.form = this.formBuider.group({
      //valor es igual a FormControl que tiene dos parametros de entrada, valor inicial y el array de validacion
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      text: ['', [Validators.required, Validators.maxLength(80)]],
      category: ['', [Validators.required]],
      gender: ['', [Validators.required]],

    });
  }
  

  save(event: Event) {
    event.preventDefault();
    console.log('save')
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    }else{
      this.form.markAllAsTouched();
    }
    
  } 

  get emailField(){
    return this.form.get('email');
  }

  get nameField(){
    return this.form.get('name');
  }

  doSomething() {
    console.log('click');
  }

}
