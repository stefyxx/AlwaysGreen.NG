import { HttpClient, HttpParams } from "@angular/common/http";
import { AbstractControl, AsyncValidatorFn, ValidationErrors, Validators } from "@angular/forms";
import { Observable, map } from "rxjs";

export class AddressValidators {
    static streetRequired(control: AbstractControl): ValidationErrors|null {
        const value = control.value;

        if(!value?.streetName) {
            return { streetRequired: true }
        }
        else {
            return null;
        }
    }
    static numberRequired(control: AbstractControl): ValidationErrors|null {
        const value = control.value;
        if(!value?.streetNumber) return { numberRequired: true };
        else return null;
    }
    static cityRequired(control: AbstractControl): ValidationErrors|null {
        const value = control.value;
        if(!value?.city) return { cityRequired: true };
        else return null;
    }
    static zipCodeRequired(control: AbstractControl): ValidationErrors|null {
        const value = control.value;
        if(!value?.zipCode) return { zipCodeRequired: true };
        else return null;
        //Validators.maxLength(4);
    }
    static countryRequired(control: AbstractControl): ValidationErrors|null {
        const value = control.value;
        if(!value?.country) return { countryRequired: true };
        else return null;
    }

    // static validAddress(httpClient: HttpClient): AsyncValidatorFn {
    //     return (control: AbstractControl): Observable<ValidationErrors|null> => {
    //         let value = control.value;
    //         const params = new HttpParams({
    //             fromObject: {
    //                 format:'json',
    //                 q: `${value?.streetName} ${value?.streetNumber}`
    //             }
    //         })
    //         return httpClient.get<any[]>('https://nominatim.openstreetmap.org/search', {params})
    //             .pipe(map(data => {
    //                 if(data.length) {
    //                     return null;
    //                 }
    //                 return { invalidAddress: true }
    //             }))
    //     }  
    // }
}