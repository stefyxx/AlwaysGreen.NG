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
  
  get(id: number) {
    return this._allCouriers().find(c => c.id === id);
  }


  // il mio delete é un update
  // remove(id: number){
  //   this.httpClient.delete('https://localhost:7135/api/Courier/delete' + id)
  //   .subscribe(()=>{
  //     this._allCouriers.update(l=> l.filter(c=> c.id !== id));
  //   });
  // }

  //no id et isActive
  insert(courier: ICourier){
    this.httpClient.post<ICourier>('https://localhost:7135/api/Courier/insert', courier)
    .subscribe(result =>{
      this._allCouriers.update(datas => [...datas,result]);
    });
  }

  update(id: number, modifiedCourier: ICourier){
    const c = this.get(id);
    if(!c) {
      return; // non c'é alcun courier con questo id nella lista
    }
    this.httpClient.put<ICourier>('https://localhost:7135/api/Courier/update/' + id, modifiedCourier)
    .subscribe(result => {
      Object.assign(c, result);
      this._allCouriers.update(l => [...l]);
    });
  }

  remove(id: number){
    const c = this.get(id);
    console.log(c);
    if(!c) {
      return; // non c'é alcun courier con questo id nella lista
    }
    this.httpClient.put<ICourier>('https://localhost:7135/api/Courier/delete/' + id, null)
    .subscribe(result => {
      Object.assign(c, result);
      this._allCouriers.update(l => [...l]);
    });
  }

}
