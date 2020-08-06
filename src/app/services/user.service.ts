import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  checkEmail(email: string){
    //valida si el correo ya existe 
    return of ({isEmailAvailable: email !== 'israel_2896@hotmail.com'})
    .pipe(delay(500));
  }
}
