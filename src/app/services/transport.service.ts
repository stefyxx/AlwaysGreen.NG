import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { ITransport } from '../models/transport';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  private readonly _transports: WritableSignal<ITransport[]> = signal([]);

  get transports() : Signal<ITransport[]>{
    return this._transports.asReadonly();
  }

  constructor(
    private readonly httpClient: HttpClient
  ) { 
    this.httpClient.get<ITransport[]>('https://localhost:7135/api/Transport')
    .subscribe(result =>{
      this._transports.set(result)
    })
  }

  insert(transport : ITransport){
    this.httpClient.post<ITransport>('https://localhost:7135/api/Transport/insert', transport)
    .subscribe(result=>{
      this._transports.update(datas => [...datas, result]);
    });
  }
}
