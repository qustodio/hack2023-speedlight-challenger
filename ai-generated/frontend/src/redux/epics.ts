import { combineEpics, Epic, ofType } from 'redux-observable';
import { switchMap, map } from 'rxjs/operators';
import { RootState } from './types';
import { ActionTypes, setChallenge, ChallengeActionTypes, GetChallengeAction } from './actions';
import { getChallengeApi } from '../api';

type ChallengeEpic = Epic<ChallengeActionTypes, ChallengeActionTypes, RootState>;

const getChallengeEpic: ChallengeEpic = (action$, _state$, _dependencies) =>
  action$.pipe(
    ofType(ActionTypes.GET_CHALLENGE),
    switchMap((action: GetChallengeAction) => {
        return getChallengeApi({
          prompt: action.payload.prompt,
          difficulty: action.payload.difficulty,
        })
        .pipe(
          map((response) => {
            return setChallenge(response.response.challenge)
          })
        )

    })
  );

export const rootEpic: ChallengeEpic = combineEpics(getChallengeEpic);
