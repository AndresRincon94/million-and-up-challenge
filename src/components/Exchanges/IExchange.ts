interface IExchange {
  id: number,
  name: string,
  name_id: string,
  volume_usd: number,
  active_pairs: number,
  url: string,
  country: string
}

export interface IExchangeSelector {
  exchanges: IExchange[];
}

export interface IExchangeStore {
  getExchanges: IExchangeSelector;
}

export default IExchange;
