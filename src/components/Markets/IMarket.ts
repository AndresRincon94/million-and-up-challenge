interface IMarket {
  name: string,
  base: string,
  quote: string,
  price: number,
  price_usd: number,
  volume: number,
  volume_usd: number,
  time: number
}

export interface IMarketSelector {
  markets: IMarket[];
  marketsFiltered: IMarket[];
  currentCryptoId: number;
  currentCryptoName: string;
}

export interface IMarketStore {
  getMarketsByCrypto: IMarketSelector;
}

export default IMarket;
