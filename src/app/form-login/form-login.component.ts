import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  Myform: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  public buildForm(){
    this.Myform = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get IniSesEmail(){
    return this.Myform.get('email');
  }

  get password(){
    return this.Myform.get('password');
  }
}
