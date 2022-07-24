import React from "react";
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useFilters,
  useSortBy,
  usePagination,
} from "react-table"; // new
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { TableBody } from "./TableHeaders"


export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}: any) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row: any) => {
      options.add(row.values[id]);
    });
    //@ts-ignore
    return [...options.values()];
  }, [id, preFilteredRows]);
  // Render a multi-select box
  return (
    <select
      name={id}
      id={id}
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      className="border border-gray-100 rounded-lg text-blue-900 text-tiny px-96"
      style={{ backgroundImage: 'url("./assets/icons/filter.svg")', paddingRight: "0px", paddingLeft: "15px" }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
// Define a default UI for filtering
export function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}: any) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  //  used to add a little delay to avoid too many re-renders while the user is typing
  const onChange = useAsyncDebounce((value: any) => {
    setGlobalFilter(value || undefined);
  }, 200);
  return (
    <>
      {/* Search:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
      /> */}
      <div className="pt-2  mb-6 relative text-gray-600">
        <button type="submit" className="absolute left-6 top-0 mt-5 mr-4">
          <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace={"preserve"} width="512px" height="512px">
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
        <input
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }} placeholder={`${count} records...`} className=" md:w-96 w-1/6 border border-gray-100 px-16 bg-white h-10  pr-6 rounded-lg text-sm focus:outline-none" type="search" name="search" />
      </div>
    </>
  );
}




function Table({ columns, data, setIsOpen, setOpenDrawer}: any) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    //new
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page
    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  }: any = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  ); // new
  // Render the UI for your table


  return (
    <>
      <div className="md:flex justify-between mx-6">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        {headerGroups.map((headerGroup: any) =>
          headerGroup.headers.map((column: any) =>
            column.Filter ? (
              <div key={column.id}>
                <label htmlFor={column.id}></label>
                {column.render("Filter")}
              </div>
            ) : null
          )
        )}
      </div>
      <table {...getTableProps()} border="1" className=" overflow-x-scroll md:overscroll-none md:table block  w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs uppercase text-blue-900 bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
          {headerGroups.map((headerGroup: any, key: any) => (
            <tr key={key} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any, key: any) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th key={key} {...column.getHeaderProps(column.getSortByToggleProps())} scope="col" className="px-6 py-3">
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? " ▼ " : " ▲ ") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {console.log(page.length)}
          {page.length == 0  ? 

          console.log("empty") : 
          
          page.map((row: any, i: any) => {
            // replace row with page
            return (<>
                <TableBody row={row.original} setIsOpen={setIsOpen} setOpenDrawer={setOpenDrawer} />
            </>
            );
          })}

        </tbody>
      </table>
      <div className="pagination px-6 py-0 my-6 md:flex justify-between text-center">
        <div className="block">
          {/* <button className="bg-blue-900 rounded-full text-white w-auto px-10 py-1 text-sm" onClick={() => gotoPage(0)} disabled={!canPreviousPage} >
            {"First"}
          </button>{" "}
          <button className="bg-gray-600 rounded-full text-white w-auto px-4 py-2 text-sm" onClick={() => previousPage()} disabled={!canPreviousPage}>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>{" "}
          <button className="bg-gray-600 rounded-full text-white w-auto px-4 py-2 text-sm" onClick={() => nextPage()} disabled={!canNextPage}>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>{" "}
          <button className="bg-blue-900 rounded-full text-white w-auto px-10 py-1 text-sm" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {"Last"}
          </button>{" "}
          <span className="text-tiny ml-6 block md:inline mt-4">
            Page{" "}
            <strong >
              {state.pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span> */}
          <div className="bg-white flex items-center justify-between">
            <div className="flex-1 flex justify-between sm:hidden">
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </a>
              <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
              </a>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button
                    onClick={() => gotoPage(0)} disabled={!canPreviousPage}
                    className={`${ canPreviousPage == false ? "text-gray-600" : "text-blue-900"} relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-blue-900 hover:bg-gray-50 `}
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                  <button
                    onClick={() => previousPage()} disabled={!canPreviousPage} aria-current="page"
                    className={`${ canPreviousPage == false ? "text-gray-600" : "text-blue-900"} relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-blue-900 hover:bg-gray-50 `}
                  >
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    onClick={() => nextPage()} disabled={!canNextPage}
                    className={`${ canNextPage == false ? "text-gray-600" : "text-blue-900"} relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-blue-900 hover:bg-gray-50 `}
                  >
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}
                    className={`${ canNextPage == false ? "text-gray-600" : "text-blue-900"} relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-blue-900 hover:bg-gray-50 `}
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </nav>
              </div>
              <div className="px-10">
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{state.pageIndex + 1}</span> of{' '}
                  <span className="font-medium">{pageOptions.length}</span> pages
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="block mt-4 md:mt-0">
          <select
            value={state.pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
            className="border border-gray-100 rounded-lg text-blue-900 text-tiny px-96"
            style={{ backgroundImage: 'url("./assets/icons/filter.svg")', paddingRight: "38px", paddingLeft: "15px" }}
          >
            {[5, 10, 20].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* <div>
        <pre>
          <code>{(JSON.stringify(state, null, 2))}</code>
        </pre>
      </div> */}
      {
        console.log((JSON.stringify(state, null, 2)))
      }
    </>
  );
}
export default Table;
