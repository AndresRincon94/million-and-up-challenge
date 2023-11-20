import { ReactNode } from "react";

interface IPagination {
  totalRecords: number;
  pageLimit: number;
  initialPage: number;
  setInitialPage: (page: number) => void;
  setPageLimit: (limit: number) => void;
  children?: ReactNode; 
}

export default IPagination;