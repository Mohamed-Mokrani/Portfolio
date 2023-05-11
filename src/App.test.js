import { render, screen } from '@testing-library/react';
import App from './App';
// Copyrights MOHAMED MOKRANI | Linkedin:https://www.linkedin.com/in/medmokranii/
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
