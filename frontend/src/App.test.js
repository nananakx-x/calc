import { fireEvent, render, screen, waitFor} from '@testing-library/react';
import App from './App';

/*

import axios from 'axios';

jest.mock('axios');

const dummyOperands = [
  {
    first: "56",
    second: "97542",
    addExpected: "Answer: 97598",
    subtrExpected: "Answer: -97486",
  },
  {
    first: "134",
    second: "5678",
    addExpected: "Answer: 5812",
    subtrExpected: "Answer: -5544"
  },
  {
    first: "899654",
    second: "1097564",
    addExpected: "Answer: 1997218",
    subtrExpected: "Answer: -197910"
  },
];

test('addition', async () => {
  for (const data of dummyOperands) {
    // axios.post.mockResolvedValueOnce({ data: { result: data.addExpected } });
    const mockResponse = { data: { result: data.addExpected } };
    jest.spyOn(axios, 'post').mockResolvedValueOnce(mockResponse);

  render(<App />);

  const first = screen.getByPlaceholderText('Enter first number');
  const second = screen.getByPlaceholderText('Enter second number');
  const toAdd = screen.getByText('Add');

  // first.value = data.first.toString();
  // second.value = data.second.toString();

  fireEvent.change(first, { target: { value: data.first } });
  fireEvent.change(second, { target: { value: data.second } });

  fireEvent.click(toAdd);

  await waitFor(() => screen.getByText(/Answer:/));

  expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/api/add', { first: data.first, second: data.second }, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, });

  // expect(screen.getByText(/Answer:/)).toHaveTextContent(data.addExpected);

  }

});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

*/