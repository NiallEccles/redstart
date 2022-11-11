import { Component } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Activity } from './interfaces/activity';
import { TimerService } from './services/timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public activities: Activity[] = [];
  title = 'redstart';

  public addActivity(name?: string) {
    this.activities.push({
      name: name,
      time: 0,
      start: false,
    });
  }

  public toggleTimer(index: number) {
    this.activities[index].start = !this.activities[index].start;
  }

  public stopAll() {
    this.activities.forEach((tracker) => {
      tracker.start = false;
    })
  }

  constructor(private timerService: TimerService) {
    this.timerService.timer.subscribe(() => {
      this.activities.forEach((activity) => {
        activity.start ? activity.time++ : '';
      });
    })
  }
}
