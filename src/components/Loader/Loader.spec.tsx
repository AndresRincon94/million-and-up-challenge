import React from 'react';
import { render, screen } from '@testing-library/react';

import Loader from './Loader';

describe('Loader', () => {
  it('should render Loader component', () => {
    render(<Loader />);

    const loaderComponent = screen.getByLabelText('loader');
    expect(loaderComponent).toBeInTheDocument();
    expect(loaderComponent.childElementCount).toBe(1);
  });
});
