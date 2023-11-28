import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import * as router from 'react-router';

import { renderWithProviders } from '../../utils/testUtils';
import { rightArrowIcon } from '../../constants/constants';

import BackButton from './BackButton';

describe('BackButton', () => {
  const navigateMock = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigateMock);
  });

  it('should render default back button', () => {
    renderWithProviders(
      <BackButton />,
      {preloadedState: {}}
    );

    const backButton = screen.getByLabelText('back button');

    expect(backButton).toBeInTheDocument();
    expect(backButton).toHaveStyle({
      backgroundImage: rightArrowIcon
    });
  });

  it('should render call the navigate when user click the back button', () => {
    renderWithProviders(
      <BackButton />,
      {preloadedState: {}}
    );

    const backButton = screen.getByLabelText('back button');

    expect(backButton).toBeInTheDocument();

    fireEvent.click(backButton);

    expect(navigateMock).toHaveBeenCalledWith(-1);
  });
});
