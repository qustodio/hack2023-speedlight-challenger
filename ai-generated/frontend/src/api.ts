import { catchError, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

interface ChallengeRequest {
  prompt: string;
  difficulty: number;
}

interface ChallengeResponse {
  challenge: string;
}

interface FakeResponse {
    response: ChallengeResponse
}

const fakeResponse: FakeResponse = {
    response: {
        challenge: "Solve the following equation: 2x + 5 = 13. Find the value of 'x' that satisfies the equation. Show all your steps and calculations."
    }
};

const API_URL = import.meta.env.VITE_API_URL;

export const getChallengeApi = (requestData: ChallengeRequest) =>
  ajax.post<ChallengeResponse>(`${API_URL}/api/getChallenge`, requestData)
    .pipe(
      catchError(() => of(fakeResponse))
    );
