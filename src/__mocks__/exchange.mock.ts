import { IExchangeData, IExchangeSelector } from '../components/Exchange/IExchange';
import IMarket from '../components/Markets/IMarket';

export const pairsMock = [
  {
    base: 'BNB',
    quote: 'USDT',
    volume: 91368012.29060800373554229736328125,
    price: 17.194400000000001682565198279917240142822265625,
    price_usd: 17.194400000000001682565198279917240142822265625,
    time: 1553469901
  },
  {
    base: 'BNB',
    quote: 'BTC',
    volume: 85406892.01423899829387664794921875,
    price: 0.00431400000000000012623235789988029864616692066192626953125,
    price_usd: 17.16682845449999916809247224591672420501708984375,
    time: 1553469901
  }
] as IMarket[];

const dataMock = {
  name: 'Binance',
  date_live: '2014-01-01',
  url: 'https:www.binance.com',
} as IExchangeData;

const firstExchange = {
  id: 5,
  name: 'Binance',
  name_id: 'binance',
  volume_usd: 760553951.4576122760772705078125,
  active_pairs: 399,
  url: 'https://www.binance.com',
  country: 'Japan'
};

const secondExchange = {
  id: 223,
  name: 'Coineal',
  name_id: 'coineal',
  volume_usd: 608015772.737554073333740234375,
  active_pairs: 48,
  url: 'https://www.coineal.com/',
  country: 'Seychelles'
};

export const exchangeListResponseArrayMock = [
  firstExchange,
  secondExchange
];

export const exchangeResponseArrayMock = [
  dataMock,
  pairsMock
];

export const defaultExchangeMock = {
  data: dataMock,
  pairs: pairsMock,
};

export const defaultStateExchange = {
  currentExchange: defaultExchangeMock,
  currentExchangeId: 5,
  currentExchangeName: 'Binance',
  currentPairsFiltered: pairsMock,
};

export const emptyStateExchange = {
  currentExchange: {
    data: {}
  },
  currentExchangeId: 0,
  currentExchangeName: '',
  currentPairsFiltered: [],
} as unknown as IExchangeSelector;
