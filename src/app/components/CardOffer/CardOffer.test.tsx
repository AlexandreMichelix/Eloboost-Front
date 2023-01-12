import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardOffer from './CardOffer';

describe('<CardOffer />', () => {
  test('it should mount', () => {
    render(<CardOffer />);
    
    const cardOffer = screen.getByTestId('CardOffer');

    expect(cardOffer).toBeInTheDocument();
  });
});