export enum ActionTypes {
    SET_CHALLENGE = 'SET_CHALLENGE',
    CLEAR_CHALLENGE = 'CLEAR_CHALLENGE',
    GET_CHALLENGE = 'GET_CHALLENGE',
  }
  
  export interface SetChallengeAction {
    type: ActionTypes.SET_CHALLENGE;
    payload: string;
  }
  
  export interface ClearChallengeAction {
    type: ActionTypes.CLEAR_CHALLENGE;
  }
  
  export interface GetChallengeAction {
    type: ActionTypes.GET_CHALLENGE;
    payload: {
      prompt: string;
      difficulty: number;
    };
  }
  
  export type ChallengeActionTypes =
    | SetChallengeAction
    | ClearChallengeAction
    | GetChallengeAction;
  
  export const setChallenge = (challenge: string): SetChallengeAction => ({
    type: ActionTypes.SET_CHALLENGE,
    payload: challenge,
  });
  
  export const clearChallenge = (): ClearChallengeAction => ({
    type: ActionTypes.CLEAR_CHALLENGE,
  });
  
  export const getChallenge = (prompt: string, difficulty: number): GetChallengeAction => ({
    type: ActionTypes.GET_CHALLENGE,
    payload: {
      prompt,
      difficulty,
    },
  });
  