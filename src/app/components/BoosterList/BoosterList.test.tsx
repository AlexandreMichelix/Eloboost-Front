import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BoosterList from './BoosterList';

describe('<BoosterList />', () => {
  test('it should mount', () => {
    render(<BoosterList />);
    
    const boosterList = screen.getByTestId('BoosterList');

    expect(boosterList).toBeInTheDocument();
  });
});