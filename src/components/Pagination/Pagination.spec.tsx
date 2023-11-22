import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Pagination from "./Pagination";

describe("Pagination", () => {
  const setInitialPageMock = jest.fn();
  const setPageLimitMock = jest.fn();

  it("should render default Pagination", () => {
    render(
      <Pagination
        totalRecords={100}
        startRecord={0}
        pageLimit={10}
        setStartRecord={setInitialPageMock}
        setPageLimit={setPageLimitMock}
      />
    );

    const paginationLimitElement = screen.getByLabelText("pagination-limit");
    const paginationItemElements = screen.getByLabelText("pagination-items");
    const paginationInfoElement = screen.getByLabelText("pagination-info");

    expect(paginationLimitElement).toBeInTheDocument();
    expect(paginationInfoElement).toBeInTheDocument();
    expect(paginationInfoElement.textContent).toEqual(
      "100 Records | Showing 1/10"
    );
    expect(paginationItemElements).toBeInTheDocument();
    expect(paginationItemElements.childElementCount).toBe(10);
  });

  it("should not render Pagination with only 2 page", () => {
    render(
      <Pagination
        totalRecords={15}
        startRecord={0}
        pageLimit={10}
        setStartRecord={setInitialPageMock}
        setPageLimit={setPageLimitMock}
      />
    );

    const paginationLimitElement = screen.getByLabelText("pagination-limit");
    const paginationItemElements = screen.getByLabelText("pagination-items");

    expect(paginationLimitElement).toBeInTheDocument();
    expect(paginationItemElements).toBeInTheDocument();
    expect(paginationItemElements.childElementCount).toBe(6);
  });

  it("should not render Pagination with only one page", () => {
    render(
      <Pagination
        totalRecords={10}
        startRecord={0}
        pageLimit={10}
        setStartRecord={setInitialPageMock}
        setPageLimit={setPageLimitMock}
      />
    );

    const paginationLimitElement = screen.queryByLabelText("pagination-limit");
    const paginationItemElements = screen.queryByLabelText("pagination-items");

    expect(paginationLimitElement).not.toBeInTheDocument();
    expect(paginationItemElements).not.toBeInTheDocument();
  });

  it("should render Pagination items about page limit", async () => {
    render(
      <Pagination
        totalRecords={60}
        startRecord={0}
        pageLimit={10}
        setStartRecord={setInitialPageMock}
        setPageLimit={setPageLimitMock}
      />
    );

    const paginationLimitElement = screen.getByLabelText("pagination-limit");
    const paginationItemElements = screen.getByLabelText("pagination-items");

    expect(paginationLimitElement).toBeInTheDocument();
    expect(paginationItemElements).toBeInTheDocument();
    expect(paginationItemElements.childElementCount).toBe(10);

    fireEvent.change(paginationLimitElement, { target: { value: "50" } });

    await waitFor(() => {
      expect(paginationItemElements.childElementCount).toBe(6);
    });
  });

  it("should render Pagination items about page limit", async () => {
    render(
      <Pagination
        totalRecords={60}
        startRecord={0}
        pageLimit={10}
        setStartRecord={setInitialPageMock}
        setPageLimit={setPageLimitMock}
      />
    );

    const paginationLimitElement = screen.getByLabelText("pagination-limit");
    const paginationItemElements = screen.getByLabelText("pagination-items");

    expect(paginationLimitElement).toBeInTheDocument();
    expect(paginationItemElements).toBeInTheDocument();
    expect(paginationItemElements.childElementCount).toBe(10);

    fireEvent.change(paginationLimitElement, { target: { value: "50" } });

    await waitFor(() => {
      expect(paginationItemElements.childElementCount).toBe(6);
    });
  });

  it("should select active page when click the next and last pagination button", async () => {
    render(
      <Pagination
        totalRecords={60}
        startRecord={0}
        pageLimit={10}
        setStartRecord={setInitialPageMock}
        setPageLimit={setPageLimitMock}
      />
    );

    const nextPageElement = screen.getByLabelText("next-page");
    const lastPageElement = screen.getByLabelText("last-page");
    const paginationInfoElement = screen.getByLabelText("pagination-info");

    expect(paginationInfoElement).toBeInTheDocument();
    expect(paginationInfoElement.textContent).toEqual(
      "60 Records | Showing 1/6"
    );

    fireEvent.click(nextPageElement);

    await waitFor(() => {
      expect(paginationInfoElement.textContent).toEqual(
        "60 Records | Showing 2/6"
      );
    });

    fireEvent.click(lastPageElement);

    await waitFor(() => {
      expect(paginationInfoElement.textContent).toEqual(
        "60 Records | Showing 6/6"
      );
    });
  });

  it("should select active page when click the specific pagination button", async () => {
    render(
      <Pagination
        totalRecords={60}
        startRecord={0}
        pageLimit={10}
        setStartRecord={setInitialPageMock}
        setPageLimit={setPageLimitMock}
      />
    );

    const page5Element = screen.getByLabelText("go-to-page-5");
    const beforePageElement = screen.getByLabelText("before-page");
    const firstPageElement = screen.getByLabelText("first-page");
    const paginationInfoElement = screen.getByLabelText("pagination-info");
    expect(paginationInfoElement).toBeInTheDocument();
    expect(paginationInfoElement.textContent).toEqual(
      "60 Records | Showing 1/6"
    );

    fireEvent.click(page5Element);

    await waitFor(() => {
      expect(paginationInfoElement.textContent).toEqual(
        "60 Records | Showing 5/6"
      );
    });

    fireEvent.click(beforePageElement);

    await waitFor(() => {
      expect(paginationInfoElement.textContent).toEqual(
        "60 Records | Showing 4/6"
      );
    });

    fireEvent.click(firstPageElement);

    await waitFor(() => {
      expect(paginationInfoElement.textContent).toEqual(
        "60 Records | Showing 1/6"
      );
    });
  });
});
