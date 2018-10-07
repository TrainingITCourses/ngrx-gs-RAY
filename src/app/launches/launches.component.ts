import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { LaunchesState } from './../reducers/launch/launch.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchesComponent implements OnInit {

  constructor(private storeLaunches: Store<LaunchesState>) { }

  private launches$;

  ngOnInit() {
    this.launches$ = this.storeLaunches.select('launch')
      .pipe(map(
        launchesState => launchesState.launchesFiltered ));
  }

}
