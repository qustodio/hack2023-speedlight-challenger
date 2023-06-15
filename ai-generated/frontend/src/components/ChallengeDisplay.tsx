import React from 'react';

interface ChallengeDisplayProps {
  challenge: string;
  onAccept: () => void;
  onRequestNew: () => void;
}

const ChallengeDisplay: React.FC<ChallengeDisplayProps> = ({
  challenge,
  onAccept,
  onRequestNew,
}) => {
  return (
    <div>
      <p className="result">{challenge}</p>
      <div>
        <button onClick={onAccept}>Accept Challenge</button>
        <button onClick={onRequestNew}>Request New Challenge</button>
      </div>
    </div>
  );
};

export default ChallengeDisplay;
