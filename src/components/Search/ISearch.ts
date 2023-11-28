import { ChangeEvent } from 'react';

interface ISearch {
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default ISearch;
