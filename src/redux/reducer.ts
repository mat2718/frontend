import { AppActions, IAppAction } from './actions/actions';
import { IAppState, initialState } from './state';

/**
 * Reducers - determines changes to the application's state based on the actions
 * @param {IAppState, IAppAction} interface - properties of states and of actions
 * @returns {state} - state change depending on the case
 * @author Joab Smith
 */

export const Reducer = (
  state: IAppState = initialState,
  action: IAppAction
): IAppState => {
  const newState = { ...state };
  switch (action.type) {
    case AppActions.UPDATE_BATCH:
      newState.batches = action.payload.batches;
      return newState;
    case AppActions.UPDATE_ONE_BATCH:
      newState.onebatch = action.payload.onebatch;
      return newState;
    case AppActions.UPDATE_CURRICULA:
      newState.curricula = action.payload.curricula;
      return newState;
    case AppActions.UPDATE_CLIENT:
      newState.clients = action.payload.clients;
      return newState;
    case AppActions.UPDATE_DEMAND:
      newState.demands = action.payload.demands;
      return newState;
    case AppActions.UPDATE_SKILL:
      newState.skills = action.payload.skills;
      return newState;
    case AppActions.UPDATE_TRAINER:
      newState.trainers = action.payload.trainers;
      return newState;
    default:
      return newState;
  }
};
