import { AbstractControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators'

//se crea la clase y se exporta
export class MyValidations{
    //recibe el controlador
    static isYounger(control: AbstractControl){
        //obtiene el valor del campo
        const value = control.value;
        //se valida, si el valor es menor a 18 marca un error
        if (value < 18) {
            return {isYounger: true};
        }
        //si no presenta error returna un null
        return null;
    }
    
    static isYoungerWithParam(limit: number)
    {
        return (control: AbstractControl) =>{
            const value = control.value;
            //se valida, si el valor es menor a 18 marca un error
            if (value < limit) {
                return {isYounger: true};
            }
            //si no presenta error returna un null
            return null;
        };
    }

    static validateEmail(userService: UserService){
        //recibe el control
        return (control:AbstractControl) =>{
            //accede al form del input y toma el valor
            const value = control.value;
            //accede al servicio y tomar el valor del check
            return userService.checkEmail(value)
            .pipe(
                map(response =>{
                    //si el email esta habil returna un null sino marca un error
                    return response.isEmailAvailable ? null : { notAvailable: true };
                })
            );
        };
    }
}