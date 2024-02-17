import { Injectable, Signal, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private _isOpen: WritableSignal<boolean> = signal(false);

  get isOpen() : Signal<boolean> {
    return this._isOpen.asReadonly();
  }

  toggleOpen() {
    this._isOpen.update(v => !v);
  }

  // constructor() { }
}
