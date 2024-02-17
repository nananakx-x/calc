import { render, screen } from '@testing-library/react';
import App from './App';
/*
import axios from 'axios';

jest.mock('axios');

const data = [
  {
    first: 56,
    second: 97542,
    addExpected: 97598,
    subtrExpected: -97486,
  },
  {
    first: 134,
    second: 5678,
    addExpected: 5812,
    subtrExpected: -5544
  },
  {
    first: 899654,
    second: 1097564,
    addExpected: 1997218,
    subtrExpected:-197910
  },
];
*/

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
