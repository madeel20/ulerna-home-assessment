import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from '../components/ThemeToggle';

describe('ThemeToggle', () => {
  it('toggles between dark and light mode', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    // Add assertion to check if document.documentElement.classList contains 'dark'
    fireEvent.click(button);
    // Add assertion to check if 'dark' is removed
  });
});