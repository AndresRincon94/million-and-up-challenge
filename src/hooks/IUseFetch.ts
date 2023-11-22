import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

export interface IUseFetchPagination {
  endPoint: string;
  callbackPayload: ActionCreatorWithPayload<unknown, "crypto/getCryptos">;
  startRecord: number;
  pageLimit: number;
}
