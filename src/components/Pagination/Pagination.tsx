import React, { ChangeEvent, useCallback, useState } from "react";
import styled from "styled-components";

import IPagination from "./IPagination";
import paginationStyle from "./Pagination.style";

const PaginationHeader = styled.div`${paginationStyle.header}`;
const PaginationLeftHeader = styled.div`${paginationStyle.leftHeader}`;
const PaginationLimit = styled.select`${paginationStyle.limit}`;
const PaginationFooter = styled.div`${paginationStyle.footer}`;
const PaginationWrapper = styled.ul`${paginationStyle.wrapper}`;
const PaginationItem = styled.li`${paginationStyle.item}`;

function Pagination({
  totalRecords,
  pageLimit,
  initialPage,
  setPageLimit,
  setInitialPage,
  children,
}: IPagination) {
  const [state, setState] = useState({
    totalPages: Math.ceil(totalRecords / pageLimit),
    currentPage: 1,
    pagesToShow: 6,
  });

  const onChangeLimitHandler = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const newLimit = parseInt(e.target.value);
      setPageLimit(newLimit);
      const total = Math.ceil(totalRecords / newLimit);
      setState({
        ...state,
        totalPages: Math.ceil(total),
      });
    },
    [pageLimit, state, setState]
  );

  const setPage = useCallback(
    (page: any) => {
      const { totalPages } = state;

      if (page < 1) {
        page = 1;
      } else if (page > totalPages) {
        page = totalPages;
      }

      setState({
        ...state,
        currentPage: page,
      });

      setInitialPage((page - 1) * pageLimit);
    },
    [initialPage, pageLimit, state.totalPages]
  );

  const getPager = useCallback(() => {
    let { pagesToShow, currentPage, totalPages } = state;
    const pages = [];
    let startFromNumber = 0;

    if (totalPages <= pagesToShow) {
      startFromNumber = 1;
      pagesToShow = totalPages;
    } else {
      if (currentPage <= Math.ceil(pagesToShow / 2)) {
        startFromNumber = 1;
      } else if (
        currentPage + Math.floor((pagesToShow - 1) / 2) >=
        totalPages
      ) {
        startFromNumber = totalPages - (pagesToShow - 1);
      } else {
        startFromNumber = currentPage - Math.floor(pagesToShow / 2);
      }
    }

    for (let i = 1; i <= pagesToShow; i++) {
      pages.push(startFromNumber++);
    }

    return {
      pages,
    };
  }, [state]);

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
          <p>
            {totalRecords} Records | Showing {state.currentPage}/{state.totalPages}
          </p>
        </div>
      </PaginationHeader>
      {children}
      <PaginationFooter>
        <PaginationWrapper>
          <PaginationItem>
            <button
              disabled={state.currentPage === 1 ? true : false}
              onClick={() => setPage(1)}
            >
              First
            </button>
          </PaginationItem>
          <PaginationItem>
            <button
              disabled={state.currentPage === 1 ? true : false}
              onClick={() => setPage(state.currentPage - 1)}
            >
              Before
            </button>
          </PaginationItem>
          {pages.map((page: any, index: number) => (
            <PaginationItem key={`pagination-item-${index}`}>
              <button
                className={state.currentPage === page ? "active" : ""}
                onClick={() => setPage(page)}
              >
                {page}
              </button>
            </PaginationItem>
          ))}
          <PaginationItem>
            <button
              disabled={state.currentPage === state.totalPages ? true : false}
              onClick={() => setPage(state.currentPage + 1)}
            >
              Next
            </button>
          </PaginationItem>
          <PaginationItem>
            <button
              disabled={state.currentPage === state.totalPages ? true : false}
              onClick={() => setPage(state.totalPages)}
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
