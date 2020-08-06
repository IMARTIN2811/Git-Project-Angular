import { Component, OnInit } from '@angular/core';
//import de los formgroup 
import { FormBuilder, FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import { MyValidations } from '../utils/my-validations';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  //instancia o atributo para controlar el form
  form:FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(){
    this.form = this.formBuilder.group({
      //si tienes una sola validacion no es necesario meterlo en un array
      //hay que ponerlo directamente y si tienes un grupo de validaciones
      //entonces si hay que hacer un array
      //age: [0, MyValidations.isYounger],
      age: [0, Validators.minLength(18)],
      price: [0, [Validators.min(500), Validators.max(3000)]],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      terms: ['', Validators.requiredTrue],
      email: ['', [Validators.required, Validators.email]],
      text: ['', [Validators.pattern(/^[a-zA-Z ]+$/), Validators.minLength(5), Validators.maxLength(80)]],
      date: ['',Validators.required],
      category: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  get emailFieldIsValid(){
    return this.emailField.touched && this.emailField.valid;
  }

  get emailFieldIsInvalid(){
    return this.emailField.touched && this.emailField.invalid;
  }

  get emailField(){
    return this.form.get('email');
  }

}
