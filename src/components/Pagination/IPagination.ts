import { ReactNode } from 'react';

interface IPagination {
  totalRecords: number;
  pageLimit: number;
  startRecord: number;
  setStartRecord: (page: number) => void;
  setPageLimit: (limit: number) => void;
  children?: ReactNode; 
}

export interface IPaginationState {
  totalPages: number,
  currentPage: number,
  pagesToShow: number,
}

export default IPagination;
