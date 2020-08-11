import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reg',
  templateUrl: './form-reg.component.html',
  styleUrls: ['./form-reg.component.css']
})
export class FormRegComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  public buildForm(){
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  save(event: Event){
  }

  get nameField(){
    return this.form.get('name');
  }

  get emailField(){
    return this.form.get('email');
  }

  get passField(){
    return this.form.get('password');
  }
}
