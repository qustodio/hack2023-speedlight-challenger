import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChallenge, clearChallenge } from './redux/actions';
import ChallengeForm from './components/ChallengeForm';
import ChallengeDisplay from './components/ChallengeDisplay';
import { RootState } from './redux/types';
import './App.css';

const App: React.FC = () => {
  const [showChallenge, setShowChallenge] = useState(false);

  const dispatch = useDispatch();
  const challenge = useSelector((state: RootState) => state.challenge.challenge);

  const handleSubmit = (prompt: string, difficulty: number) => {
    dispatch(getChallenge(prompt, difficulty));
    setShowChallenge(true);
  };

  const handleAccept = () => {
    // Handle accepting the challenge here
    console.log('Accepted the challenge:', challenge);
  };

  const handleRequestNew = () => {
    dispatch(clearChallenge());
    setShowChallenge(false);
  };

  return (
    <div>
      {showChallenge ? (
        <ChallengeDisplay
          challenge={challenge!}
          onAccept={handleAccept}
          onRequestNew={handleRequestNew}
        />
      ) : (
        <ChallengeForm onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default App;
