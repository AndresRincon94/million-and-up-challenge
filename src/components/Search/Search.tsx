import React from 'react';
import styled from 'styled-components';

import searchStyle from './Search.style';
import ISearch from './ISearch';

const SearchInput = styled.input`${searchStyle.searchInput}`;

/**
 * Render the Search input
 *
 * @param ISearch - Search props 
 * @param ISearch.onChangeHandler - Callback when user change the input value
 */
function Search({
  onChangeHandler,
}: ISearch) {
  return (
    <SearchInput
      type='text'
      placeholder="Search.."
      aria-label='Search input'
      onChange={onChangeHandler}
    />
  );
}

export default Search;
