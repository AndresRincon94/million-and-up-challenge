import React from 'react';
import styled from 'styled-components';

import searchStyle from './Search.style';
import ISearch from './ISearch';

const SearchInput = styled.input`${searchStyle.searchInput}`;

function Search({
  onChangeHandler,
}: ISearch) {
  return (
    <SearchInput type='text' onChange={onChangeHandler} placeholder="Search.." />
  );
}

export default Search;
