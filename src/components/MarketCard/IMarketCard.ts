import { MouseEventHandler } from 'react';

import IMarket from '../Markets/IMarket';

interface IMarketCard {
  title?: string;
  market?: IMarket;
  action?: () => MouseEventHandler<HTMLDivElement>;
}

export default IMarketCard;
