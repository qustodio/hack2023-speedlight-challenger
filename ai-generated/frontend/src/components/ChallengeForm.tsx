import React, { useState } from 'react';

interface ChallengeFormProps {
  onSubmit: (prompt: string, difficulty: string) => void;
}

const ChallengeForm: React.FC<ChallengeFormProps> = ({ onSubmit }) => {
  const [prompt, setPrompt] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt && difficulty) {
      onSubmit(prompt, difficulty);
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
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
        <option value="expert">Expert</option>
        <option value="master">Master</option>
      </select>

      <button type="submit">Get Challenge</button>
    </form>
  );
};

export default ChallengeForm;
