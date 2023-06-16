import { catchError, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

interface ChallengeRequest {
  challenge: string;
  difficulty: string;
}

export interface Response {
  problem: string;
}

interface FakeAjaxResponse {
  response: Response
}

const fakeResponse: FakeAjaxResponse = {
  response: {
    problem: "Solve the following equation: 2x + 5 = 13. Find the value of 'x' that satisfies the equation. Show all your steps and calculations."
  }
};

const API_URL = import.meta.env.VITE_API_URL;

export const getChallengeApi = (requestData: ChallengeRequest) =>
  ajax.post<Response>(`${API_URL}/mathchallenge`, requestData)
    .pipe(
      catchError(() => of(fakeResponse))
    );
