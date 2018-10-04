import { LaunchActions, LaunchActionTypes } from './launch.actions';

export interface LaunchesState {
  launches: any[];
  paco: number;
}

export const initialState: LaunchesState = {
  launches: [],
  paco: 0
};

export function reducer(state = initialState, action: LaunchActions): LaunchesState {
  switch (action.type) {
    case LaunchActionTypes.LoadLaunches:
      return { ...state };
    case LaunchActionTypes.LaunchesLoaded:
      return { ...initialState, launches: action.payload, paco: action.payload.length};
    default:
      return state;
  }
}
