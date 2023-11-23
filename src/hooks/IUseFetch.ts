import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export interface IUseFetchPagination {
  endPoint: string;
  callbackPayload: ActionCreatorWithPayload<unknown, string>;
  startRecord: number;
  pageLimit: number;
}

export interface IUseFetchList {
  endPoint: string;
  callbackPayload: ActionCreatorWithPayload<unknown, string>;
}
