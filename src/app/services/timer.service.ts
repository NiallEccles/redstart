import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  public timer: Observable<any>;

  constructor() {
    this.timer = timer(1000, 1000);
  }
}
