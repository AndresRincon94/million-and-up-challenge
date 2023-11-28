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

interface IExchangeData {
  id: number;
  name: string;
  date_live: Date;
  url: string;
}

interface IExchangeDetail {
  data: IExchangeData;
  pairs: IMarket[];
}

export interface IExchangeSelector {
  exchanges: IExchange[];
  currentExchange: IExchangeDetail;
  currentPairsFiltered: IMarket[];
  currentExchangeId: number;
  currentExchangeName: string;
}

export interface IExchangeStore {
  getExchange: IExchangeSelector;
}

export default IExchange;
