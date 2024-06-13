import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders the Todo component', () => {
    const app = render(<App />);
    expect(app.getByText('Todo List')).toBeInTheDocument();
});

test('renders input and add button', () => {
  const app = render(<App />);
  expect(app.getByPlaceholderText('Add a new task')).toBeInTheDocument();
    expect(app.getByText('Add')).toBeInTheDocument();
});

test('adds a new todo item', () => {
  const app = render(<App />);
  const input = app.getByPlaceholderText('Add a new task');
    const button = app.getByText('Add');

    expect(app.getByText('Learn React')).toBeInTheDocument();
    expect(input.value).toBe('');
});

test('does not add empty todo item', () => {
  const app = render(<App />);
  const button = app.getByText('Add');

    fireEvent.click(button);

    expect(screen.queryByRole('listitem')).toBeNull();
});
