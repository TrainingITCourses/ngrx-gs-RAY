import { Action } from '@ngrx/store';

export enum TypeStatusActionTypes {
  LoadTypeStatuss = '[TypeStatus] Load TypeStatuss'
}

export class LoadTypeStatuss implements Action {
  readonly type = TypeStatusActionTypes.LoadTypeStatuss;
}

export type TypeStatusActions = LoadTypeStatuss;
