import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { ILocation } from '../models/location';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private readonly _allLocations: WritableSignal<ILocation[]> = signal([]);

  get allLocations() : Signal<ILocation[]>{
    return this._allLocations.asReadonly();
  }

  constructor(
    private readonly httpClient: HttpClient
  ) { 
    this.httpClient.get<ILocation[]>('https://localhost:7135/api/Location')
    .subscribe(result =>{
      this._allLocations.set(result.map(r => ({
        ...r,
        label: r.agencyname ?? r.companyname ?? '' + ' '+ r.address.city
      })));
    })
  }
}
