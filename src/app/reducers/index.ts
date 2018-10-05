;
import * as fromTypeStatus from './type-status.reducer';
import * as fromTypeMission from './type-mission.reducer';
import * as fromAgencie from './agencie/agencie.reducer';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromLaunch from './launch/launch.reducer';

export interface State {

  launch: fromLaunch.LaunchesState;
  agencie: fromAgencie.State;
  typeMission: fromTypeMission.State;
  typeStatus: fromTypeStatus.State;
}

export const reducers: ActionReducerMap<State> = {

  launch: fromLaunch.reducer,
  agencie: fromAgencie.reducer,
  typeMission: fromTypeMission.reducer,
  typeStatus: fromTypeStatus.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
