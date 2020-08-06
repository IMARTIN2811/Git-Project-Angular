
import { AbstractControl } from '@angular/forms';

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
   
}