import React, { ChangeEvent, useCallback, useState } from 'react';
import styled from 'styled-components';

import IPagination, { IPaginationState } from './IPagination';
import paginationStyle from './Pagination.style';
import { TOTAL_PAGES } from '../../constants/constants';

const PaginationHeader = styled.div`${paginationStyle.header}`;
const PaginationLeftHeader = styled.div`${paginationStyle.leftHeader}`;
const PaginationLimit = styled.select`${paginationStyle.limit}`;
const PaginationFooter = styled.div`${paginationStyle.footer}`;
const PaginationWrapper = styled.ul`${paginationStyle.wrapper}`;
const PaginationItem = styled.li`${paginationStyle.item}`;

/**
 * Render the Pagination component
 * 
 * @param IPagination.children - React children node
 * @param IPagination.startRecord - Index of first record to be paged
 * @param IPagination.pageLimit - Number of records for page
 * @param IPagination.totalRecords - Number of total records to be paged
 * @param IPagination.setPageLimit - Callback for set fetch pageLimit
 * @param IPagination.setStartRecord - Callback for set fetch startRecord
 */
function Pagination({
  children,
  startRecord,
  pageLimit,
  totalRecords,
  setPageLimit,
  setStartRecord,
}: IPagination) {
  const [state, setState] = useState<IPaginationState>({
    totalPages: Math.ceil(totalRecords / pageLimit),
    currentPage: 1,
    pagesToShow: TOTAL_PAGES,
  });

  /**
   * Set active page
   */
  const setPage = useCallback((page: number, fallbackState?: IPaginationState) => {
      const { totalPages } = fallbackState || state;

      if (page < 1) {
        page = 1;
      } else if (page > totalPages) {
        page = totalPages;
      }

      setState({
        ...state,
        totalPages,
        currentPage: page,
      });

      setStartRecord((page - 1) * pageLimit);
    }, [startRecord, pageLimit, state.totalPages]
  );

  /**
   * Set new page limit and update the active page
   */
  const onChangeLimitHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
      const newLimit = parseInt(e.target.value);
      const total = Math.ceil(totalRecords / newLimit);
      const currentPage = state.currentPage > total ? total : state.currentPage;

      setPageLimit(newLimit);
      setPage(state.currentPage, { totalPages: total } as IPaginationState);
      setStartRecord((currentPage - 1) * newLimit);
    }, [pageLimit, state, startRecord]
  );

  /**
   * Get page numbers to show in the paginator component
   */
  const getPager = useCallback(() => {
    const { currentPage, totalPages } = state;
    let { pagesToShow } = state;
    let startFromNumber = 0;

    if (totalPages <= pagesToShow) {
      startFromNumber = 1;
      pagesToShow = totalPages;
    } else {
      if (currentPage <= Math.ceil(pagesToShow / 2)) {
        startFromNumber = 1;
      } else if (currentPage + Math.floor((pagesToShow - 1) / 2) >= totalPages) {
        startFromNumber = totalPages - (pagesToShow - 1);
      } else {
        startFromNumber = currentPage - Math.floor(pagesToShow / 2);
      }
    }

    /**
     * Build the page numbers array
     */
    const pages = Array.from(
      { length: (pagesToShow) },
      (_value, index) => startFromNumber + index
    );

    return {
      pages,
    };
  }, [state]);

  /**
   * Early return if data is empty
   */
  if (!totalRecords || state.totalPages === 1) return null;

  const { pages } = getPager();

  return (
    <>
      <PaginationHeader>
        <PaginationLeftHeader>
          <p>Show</p>
          <PaginationLimit
            value={pageLimit}
            onChange={onChangeLimitHandler}
            aria-label="pagination-limit"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </PaginationLimit>
          <span>Records</span>
        </PaginationLeftHeader>
        <div>
          <span aria-label="pagination-info">
            {totalRecords} Records | Showing {state.currentPage}/
            {state.totalPages}
          </span>
        </div>
      </PaginationHeader>
      {children}
      <PaginationFooter>
        <PaginationWrapper aria-label="pagination-items">
          <PaginationItem>
            <button
              disabled={state.currentPage === 1 ? true : false}
              onClick={() => setPage(1)}
              aria-label="first-page"
            >
              First
            </button>
          </PaginationItem>
          <PaginationItem>
            <button
              disabled={state.currentPage === 1 ? true : false}
              onClick={() => setPage(state.currentPage - 1)}
              aria-label="before-page"
            >
              Before
            </button>
          </PaginationItem>
          {pages.map((page: number, index: number) => (
            <PaginationItem key={`pagination-item-${index}`}>
              <button
                className={state.currentPage === page ? 'active' : ''}
                onClick={() => setPage(page)}
                aria-label={`go-to-page-${page}`}
              >
                {page}
              </button>
            </PaginationItem>
          ))}
          <PaginationItem>
            <button
              disabled={state.currentPage === state.totalPages ? true : false}
              onClick={() => setPage(state.currentPage + 1)}
              aria-label="next-page"
            >
              Next
            </button>
          </PaginationItem>
          <PaginationItem>
            <button
              disabled={state.currentPage === state.totalPages ? true : false}
              onClick={() => setPage(state.totalPages)}
              aria-label="last-page"
            >
              Last
            </button>
          </PaginationItem>
        </PaginationWrapper>
      </PaginationFooter>
    </>
  );
}

export default Pagination;
