import { ActionTypes, ChallengeActionTypes } from './actions';

export interface ChallengeState {
  challenge: string | null;
}

const initialState: ChallengeState = {
  challenge: null,
};

export const challengeReducer = (state = initialState, action: ChallengeActionTypes): ChallengeState => {
  switch (action.type) {
    case ActionTypes.SET_CHALLENGE:
      return {
        ...state,
        challenge: action.payload,
      };
    case ActionTypes.CLEAR_CHALLENGE:
      return {
        ...state,
        challenge: null,
      };
    default:
      return state;
  }
};
