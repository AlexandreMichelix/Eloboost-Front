import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardRequest from './CardRequest';

describe('<CardRequest />', () => {
  test('it should mount', () => {
    render(<CardRequest />);
    
    const cardRequest = screen.getByTestId('CardRequest');

    expect(cardRequest).toBeInTheDocument();
  });
});