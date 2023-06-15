import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ChallengeForm from './ChallengeForm';

export class ChallengeFormComponent {
    promptInput = screen.getByRole('textbox');
    difficultySelect = screen.getByRole('combobox');
    submitButton = screen.getByText('Get Challenge');    

    enterPrompt(prompt: string) {
      fireEvent.change(this.promptInput, { target: { value: prompt } });
      return this;
    }
    
    selectDifficulty(difficulty: string) {
      fireEvent.change(this.difficultySelect, { target: { value: difficulty } });
      return this;
    }
    
    clickSubmit() {
      fireEvent.click(this.submitButton);
      return this;
    }
}

test('calls onSubmit with prompt and difficulty when form is submitted', () => {
  const onSubmit = jest.fn();
  
  render(
    <ChallengeForm onSubmit={onSubmit} />
  );

  const component = new ChallengeFormComponent();

  component
  .enterPrompt('Test prompt')
  .selectDifficulty('3')
  .clickSubmit();

  expect(onSubmit).toHaveBeenCalledWith('Test prompt', 3);
});

test('does not call onSubmit if prompt or difficulty are empty', () => {
  const onSubmit = jest.fn();
  
  render(
    <ChallengeForm onSubmit={onSubmit} />
  );
  
  const component = new ChallengeFormComponent();
  
  component.clickSubmit();
  
  expect(onSubmit).not.toHaveBeenCalled();
});
