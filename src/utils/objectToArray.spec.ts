import cryptosResponseMock, { cryptosResponseArrayMock } from '../__mocks__/cryptos.mock';

import objectToArray from './objectToArray';

describe('objectToArray', () => {
  it('should return the default data', () => {
    const response = objectToArray(cryptosResponseMock);
    expect(response).toEqual(cryptosResponseArrayMock);
  });

  it('should return the empty list', () => {
    const response = objectToArray({});
    expect(response).toEqual([]);
  });
});
