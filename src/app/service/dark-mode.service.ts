import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkModeSubject.asObservable();
  constructor() {}

  toggleDarkMode() {
    const currentMode = this.darkModeSubject.value;
    this.darkModeSubject.next(!currentMode);
  }
}
