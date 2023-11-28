import React from 'react';
import { render, screen } from '@testing-library/react';

import Error from './Error';

describe('Error', () => {
  it('should render Error component', () => {
    render(<Error message="Error test"/>);

    const errorMessage = screen.getByText(/Error test/);
    const homeButton = screen.getByText('Go Home');

    expect(errorMessage).toBeInTheDocument();
    expect(homeButton).toBeInTheDocument();
    expect(homeButton).toHaveAttribute('href', '/');
  });
});
