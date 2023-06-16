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
          challenge: action.payload.prompt,
          difficulty: action.payload.difficulty,
        })
        .pipe(
          map((request) => {
            return setChallenge(request.response.problem)
          })
        )

    })
  );

export const rootEpic: ChallengeEpic = combineEpics(getChallengeEpic);
