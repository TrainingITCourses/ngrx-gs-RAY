import { Action } from '@ngrx/store';

export enum TypeMissionActionTypes {
  LoadTypeMissions = '[TypeMission] Load TypeMissions'
}

export class LoadTypeMissions implements Action {
  readonly type = TypeMissionActionTypes.LoadTypeMissions;
}

export type TypeMissionActions = LoadTypeMissions;
