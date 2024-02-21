import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class DateValidators {
    static beforeToday(control: AbstractControl): ValidationErrors | null {
        const value = control.value as Date;
        if(!value) {
            return null;
        }
        if(new Date() > value) {
            return null;
        }
        return { beforeToday: { minDate: new Date() } }
    }

    // static notBefore(dateMin: Date) : ValidatorFn {
    //     return (control: AbstractControl) => {
    //         const value = control.value as Date;
    //         if(!value) {
    //             return null;
    //         }
    //         if(dateMin < value) {
    //             return null;
    //         }
    //         return { notBefore: { minDate: dateMin } }
    //     }
    // }
}