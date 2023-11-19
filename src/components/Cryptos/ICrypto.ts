interface ICrypto {
  id: string
  symbol: string
  name: string
  nameid: string
  rank: number
  price_usd: string
  percent_change_24h: string
  percent_change_1h: string
  percent_change_7d: string
  price_btc: string
  market_cap_usd: string
  volume24: number
  volume24a: number
  csupply: string
  tsupply: string
  msupply: string
}

interface IInfo {
  coins_num: number;
  time: number
}

export interface ICryptoSelector {
  cryptos: ICrypto[];
  info: IInfo;
}

export interface ICryptoStore {
  getCryptos: ICryptoSelector;
}

export default ICrypto;
