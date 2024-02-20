import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputText, InputTextModule } from 'primeng/inputtext';
import { BehaviorSubject, catchError, of, retry, switchMap } from 'rxjs';
import { IAddress } from '../../../models/address';

@Component({
  selector: 'app-input-address',
  standalone: true,
  imports: [InputTextModule],
  templateUrl: './input-address.component.html',
  styleUrl: './input-address.component.scss',
  providers: [{ 
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputAddressComponent),
    multi: true,
  }]
})
export class InputAddressComponent implements ControlValueAccessor{
  @Input()
  disabled: boolean = false;
  
  @Input()
  value!: IAddress;
  
  onChange: any; //funzione se cambi quello che hai scritto nell'imput
  
  onTouch: any; //se clicchi nel campo dell'imput
  
  suggestions: any[] = []; //si riempie dell'appello all'API ,e ti dona dei risultati x riempire l'imput velocemente
  
  search$: BehaviorSubject<string> = new BehaviorSubject<string>(''); 
  constructor(
    private readonly _httpClient: HttpClient
  ) {
    //Observable --> recupera quello che sto scrivendo nell'imput ogni 3 secondi(-->retry(3))
    this.search$.pipe(
      switchMap((s) => {
        const params = new HttpParams({
          fromObject: {
              format:'json',
              q: s,
          }
        })
        return this._httpClient.get<any[]>('https://nominatim.openstreetmap.org/search', {params})
      }),
      catchError((err) => {
        if(err.statusCode === 500) {
          throw new err;
        } else {
          return of([])
        }
      }),
      retry(3)
    )
    .subscribe(data => {
      this.suggestions = data
    });
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onStreetChange($event: Event) {
    this.value = { 
      ...this.value,
      streetName: ($event.target as HTMLInputElement).value 
    }
    this.onChange(this.value);
    this.search$.next(this.value?.streetName ?? '');
  }
  onNumberChange($event: Event) {
    this.value = { 
      ...this.value,
      streetNumber: ($event.target as HTMLInputElement).value 
    }
    this.onChange(this.value);
  }
  onUnitChange($event: Event){
    this.value ={
      ...this.value,
      unit : ($event.target as HTMLInputElement).value
    }
    this.onChange(this.value);
  }
  onUnitNumberChange($event: Event){
    this.value ={
      ...this.value,
      unitNumber : ($event.target as HTMLInputElement).value
    }
    this.onChange(this.value);
  }
  onApartmentChange($event: Event){
    this.value ={
      ...this.value,
      apartment : ($event.target as HTMLInputElement).value
    }
    this.onChange(this.value);
  }
  onCityChange($event: Event){
    this.value ={
      ...this.value,
      city : ($event.target as HTMLInputElement).value
    }
    this.onChange(this.value);
  }
  onZipcodeChange($event: Event){
    this.value ={
      ...this.value,
      zipCode : ($event.target as HTMLInputElement).value
    }
    this.onChange(this.value);
  }
  onCountryChange($event: Event){
    this.value ={
      ...this.value,
      country : ($event.target as HTMLInputElement).value
    }
    this.onChange(this.value);
  }

}
