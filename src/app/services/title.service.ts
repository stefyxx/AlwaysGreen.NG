import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  title : WritableSignal<string> = signal('');
  constructor() { }

  setTitle(titleL : string){
    this.title.set(titleL);
  }
}
