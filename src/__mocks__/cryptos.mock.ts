const cryptosMock = [
  {
    id: '90',
    symbol: 'BTC',
    name: 'Bitcoin',
    nameid: 'bitcoin',
    rank: 1,
    price_usd: '37527.47',
    percent_change_24h: '1.58',
    percent_change_1h: '0.33',
    percent_change_7d: '1.61',
    price_btc: '1.00',
    market_cap_usd: '730695304610.95',
    volume24: 19187878170.049503,
    volume24a: 10313585055.552078,
    csupply: '19470946.00',
    tsupply: '19470946',
    msupply: '21000000',
  },
  {
    id: '80',
    symbol: 'ETH',
    name: 'Ethereum',
    nameid: 'ethereum',
    rank: 2,
    price_usd: '2031.95',
    percent_change_24h: '2.63',
    percent_change_1h: '0.32',
    percent_change_7d: '-1.02',
    price_btc: '0.054148',
    market_cap_usd: '248660265445.21',
    volume24: 12666320015.52868,
    volume24a: 6318627087.900007,
    csupply: '122375302.00',
    tsupply: '122375302',
    msupply: '',
  },
  {
    id: '518',
    symbol: 'USDT',
    name: 'Tether',
    nameid: 'tether',
    rank: 3,
    price_usd: '1.00',
    percent_change_24h: '-0.06',
    percent_change_1h: '-0.05',
    percent_change_7d: '-0.03',
    price_btc: '0.000027',
    market_cap_usd: '83666633059.11',
    volume24: 42467091383.4446,
    volume24a: 26608504503.008377,
    csupply: '83638374850.00',
    tsupply: '86715788906.061',
    msupply: '',
  },
];

const infoMock = {
  coins_num: 11506,
  time: 1700519283,
};

const cryptosResponseMock = {
  0: cryptosMock,
  1: infoMock,
};

export const cryptosResponseArrayMock = [
  cryptosMock,
  infoMock
];

export const cryptosDefaultMock = {
  cryptos: cryptosMock,
  info: infoMock,
};

export default cryptosResponseMock;
