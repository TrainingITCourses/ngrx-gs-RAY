import { LaunchActions, LaunchActionTypes } from './launch.actions';

export interface LaunchesState {
  launches: any[];
  launchesFiltered: any[];
}

export const initialState: LaunchesState = {
  launches: [],
  launchesFiltered: []
};

export function reducer(state = initialState, action: LaunchActions): LaunchesState {
  switch (action.type) {
    case LaunchActionTypes.LoadLaunches:
      return { ...state };
    case LaunchActionTypes.LaunchesLoaded:
      return { ...state, launches: action.payload};
    case LaunchActionTypes.LaunchesFiltered:
      return { ...state, launchesFiltered: action.payload};
    default:
      return state;
  }
}
