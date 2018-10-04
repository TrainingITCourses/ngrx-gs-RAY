import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';


@Injectable()
export class LaunchEffects {

  constructor(private actions$: Actions) {}
}
