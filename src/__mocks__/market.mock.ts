export const marketsMock = [
  {
    name: 'BitForex',
    base: 'BTC',
    quote: 'USDT',
    price: 3989,
    price_usd: 3989,
    volume: 75308,
    volume_usd: 300452773,
    time: 1553386202,
  },
  {
    name: 'bw',
    base: 'BTC',
    quote: 'USDT',
    price: 3991,
    price_usd: 3991,
    volume: 58986,
    volume_usd: 235431181,
    time: 1553386202,
  },
];

const defaultMarketsMock = {
  markets: marketsMock,
  marketsFiltered: marketsMock,
};

export const defaultStateMarketsMock = {
  markets: marketsMock,
  marketsFiltered: marketsMock,
  currentCryptoId: 80,
  currentCryptoName: 'Bitcoin'
};

export default defaultMarketsMock;
