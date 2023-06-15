import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ChallengeDisplay from './ChallengeDisplay';

const getAcceptButton = () => screen.getByText('Accept Challenge');

export const ChallengeDisplayComponent = () => {
  const acceptButton = getAcceptButton();
  
  const clickAccept = () => {
    fireEvent.click(acceptButton);
  }
  
  return { clickAccept }; 
}

test('calls onAccept when Accept Challenge is clicked', () => {
  const onAccept = jest.fn();
  render(
    <ChallengeDisplay 
      challenge="Test challenge"
      onAccept={onAccept}
      onRequestNew={() => {}}
    />
  );
  
  const { clickAccept } = ChallengeDisplayComponent();

  clickAccept();
  expect(onAccept).toHaveBeenCalled();
});
