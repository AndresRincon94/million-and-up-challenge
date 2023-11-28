import IMarket from '../Markets/IMarket';

interface IExchange {
  id: number,
  name: string,
  name_id: string,
  volume_usd: number,
  active_pairs: number,
  url: string,
  country: string
}

export interface IExchangeData {
  name: string;
  date_live: string;
  url: string;
}

export interface IExchangeDetail {
  data: IExchangeData;
  pairs: IMarket[];
}

export interface IExchangeSelector {
  currentExchange: IExchangeDetail;
  currentPairsFiltered: IMarket[];
  currentExchangeId: number;
  currentExchangeName: string;
}

export interface IExchangeStore {
  getExchange: IExchangeSelector;
}

export default IExchange;
