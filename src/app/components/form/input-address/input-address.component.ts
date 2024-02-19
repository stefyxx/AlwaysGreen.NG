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
    multi: true
  }]
})
export class InputAddressComponent implements ControlValueAccessor{
  @Input()
  disabled: boolean = false;
  
  @Input()
  //value: { street?: string, number?: string }|null = null;
  value : IAddress | null = null;
  
  onChange: any; //funzione se cambi quello che hai scritto nell'imput
  
  onTouch: any; //se clicchi nel campo dell'imput
  
  suggestions: any[] = []; //si riempie dell'appello all'API ,e ti dona dei risultati x riempire l'imput velocemente
  
  search$: BehaviorSubject<string> = new BehaviorSubject<string>(''); //Observable --> recupera quello che sto scrivendo nell'imput ogni 3 secondi(-->retry(3))

  constructor(
    private readonly _httpClient: HttpClient
  ) {
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
      street: ($event.target as HTMLInputElement).value 
    }
    // if(Object.values(this.value).some(v => !v)) {
    // if(!this.value.street || !this.value.number){
    //   this.onChange(null);
    // } else {
    //   this.onChange(this.value);
    // }
    this.onChange(this.value);
    this.search$.next(this.value?.street ?? '');
  }

  onNumberChange($event: Event) {
    this.value = { 
      ...this.value,
      number: ($event.target as HTMLInputElement).value 
    }
    this.onChange(this.value);
  }
}
