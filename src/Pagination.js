import { useState, useEffect } from "react";
import axios from "axios";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  useEffect(() => {
    axios
      .get("MOCK_DATA.json")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => {
        alert("There was an error while retrieving the data");
      });
  }, []);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

  return <div></div>;
};

export default Pagination;
