import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { ICourier } from '../models/courier';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourierService {
  //creo un signal e lo inizializzo 
  private _allCouriers: WritableSignal<ICourier[]> = signal([]); 

  get couriers() : Signal<ICourier[]>{
    return this._allCouriers.asReadonly();
  }
  constructor(
    private readonly httpClient: HttpClient
  ) { 
    this.httpClient.get<ICourier[]>('https://localhost:7135/api/Courier')
    .subscribe(result =>{
      this._allCouriers.set(result)
    });
    //subscribe == mi 'abbono' al risultato
  }
}
