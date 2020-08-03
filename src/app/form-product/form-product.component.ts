import { Component, OnInit } from '@angular/core';
//import de los formgroup
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  //instancia o atributo para controlar el form
  form: FormGroup;
  
  constructor(
    private formBuider: FormBuilder
  ) {
    //ejecuta el metodo
    this.buildForm();
   }

  ngOnInit(): void {
  }

  public buildForm(){
    //hace instancia del form
    this.form =  this.formBuider.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      text: ['', [Validators.required, Validators.maxLength(80)]],
      category:['', [Validators.required]], 
      gender: ['', [Validators.required]],
    }) ;

  }

  save(event: Event){
    event.preventDefault();
    console.log('save')
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    }else{
      this.form.markAllAsTouched();
    }
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

  doSomething(){
    console.log('click');
  }
}
