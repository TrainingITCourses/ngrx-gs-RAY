import { Action } from '@ngrx/store';

export enum AgencieActionTypes {
  LoadAgencies = '[Agencie] Load Agencies'
}

export class LoadAgencies implements Action {
  readonly type = AgencieActionTypes.LoadAgencies;
}

export type AgencieActions = LoadAgencies;
