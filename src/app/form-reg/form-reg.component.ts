import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-reg',
  templateUrl: './form-reg.component.html',
  styleUrls: ['./form-reg.component.css']
})
export class FormRegComponent implements OnInit {
  form: FormGroup;
  constructor(

  ) { }

  ngOnInit(): void {
  }

}
