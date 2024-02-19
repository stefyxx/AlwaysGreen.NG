import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { IEmptybottle } from '../models/emptybottle';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmptybottleService {
  private _allEmptybottle: WritableSignal<IEmptybottle[]> = signal([]); 
  
  get empybottles() : Signal<IEmptybottle[]>{
    return this._allEmptybottle.asReadonly();
  }
  constructor(
    private readonly httpClient: HttpClient
  ) {
    this.httpClient.get<IEmptybottle[]>('https://localhost:7135/api/Emptybottle')
    .subscribe(result =>{
      this._allEmptybottle.set(result)
   });}

   
}
