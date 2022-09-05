const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div className="flex justify-center">
        <ul className="flex space-x-8">
          <li>
            <button onClick={prevPage} href="#">
              Previous
            </button>
          </li>
          {pageNumbers.map((pgNumber) => (
            <li
              key={pgNumber}
              className={`page-item ${
                currentPage == pgNumber ? "text-blue-600 font-bold" : ""
              } `}
            >
              <button onClick={() => setCurrentPage(pgNumber)} href="#">
                {pgNumber}
              </button>
            </li>
          ))}
          <li>
            <button onClick={nextPage} href="#">
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
