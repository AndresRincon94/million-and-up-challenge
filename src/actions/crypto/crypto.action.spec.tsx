import cryptosResponseMock, { cryptosDefaultMock } from '../../__mocks__/cryptos.mock';
import { ICryptoSelector } from '../../components/Cryptos/ICrypto';

import cryptoReducer, { getCryptos } from './crypto.action';

describe('Crypto Action', () => {
  it('should return the initial state', () => {
    expect(cryptoReducer(undefined, { type: undefined })).toEqual({
      cryptos: [], info: {}
    });
  });

  it('should return the specific data', () => {
    const previousState = {} as ICryptoSelector;
    expect(cryptoReducer(previousState, getCryptos(cryptosResponseMock))).toEqual(cryptosDefaultMock);
  });

  it('should return the empty data', () => {
    const previousState = {} as ICryptoSelector;
    expect(cryptoReducer(previousState, getCryptos({}))).toEqual({
      cryptos: undefined, info: undefined
    });
  });
});