import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Search from './Search';

describe('Search', () => {
  const onChangeMock = jest.fn();

  it('should render search component', () => {
    render(<Search onChangeHandler={onChangeMock} />);

    const SearchComponent = screen.getByLabelText('Search input');
    expect(SearchComponent).toBeInTheDocument();
  });

  it('should call callback when user change the input value', () => {
    render(<Search onChangeHandler={onChangeMock()} />);

    const SearchComponent = screen.getByLabelText('Search input');
    expect(SearchComponent).toBeInTheDocument();

    fireEvent.change(SearchComponent, { target: { value: 'coin' } });

    expect(onChangeMock).toHaveBeenCalled();
  });
});
