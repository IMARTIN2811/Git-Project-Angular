import { Injectable } from '@angular/core';
//importa la funcionalidad de http
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
    return of({ isEmailAvailable: email !== 'nicolas@gmail.com' })
    .pipe(
      delay(500)
    );
  }
}
