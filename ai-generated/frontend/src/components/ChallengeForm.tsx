import React, { useState } from 'react';

interface ChallengeFormProps {
  onSubmit: (prompt: string, difficulty: number) => void;
}

const ChallengeForm: React.FC<ChallengeFormProps> = ({ onSubmit }) => {
  const [prompt, setPrompt] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt && difficulty) {
      onSubmit(prompt, parseInt(difficulty));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="prompt">Prompt:</label>
      <textarea
        id="prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={4}
        cols={50}
      />

      <label htmlFor="difficulty">Difficulty:</label>
      <select
        id="difficulty"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="">Select Difficulty</option>
        <option value="1">Easy</option>
        <option value="2">Medium</option>
        <option value="3">Hard</option>
        <option value="4">Expert</option>
        <option value="5">Master</option>
      </select>

      <button type="submit">Get Challenge</button>
    </form>
  );
};

export default ChallengeForm;
