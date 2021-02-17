import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import App from './App';

test('Renderiza "Iniciamos..."', () => {
  render(<App />);
  const linkElement = screen.getByText(/Iniciamos.../i);
  expect(linkElement).toBeInTheDocument();
});
