import { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Pagination from "./Pagination";

const SearchParams = ({ token }) => {
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
  const [hasBeenRun, setHasBeenRun] = useState(false);
  const [offset, setOffset] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = artists.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(artists.length / recordsPerPage);

  //TODO need to export this function to a separate file
  const searchArtists = async (e, newOffset = 0) => {
    if (newOffset < 0) {
      newOffset = 0;
    }

    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit: 6,
        offset: newOffset,
        q: searchKey,
        type: "artist",
      },
    });

    setArtists(data.artists.items);
    setOffset(newOffset);
    setHasBeenRun(true);
  };

  return (
    <div className="my-0 mx-auto w-11/12">
      <form onSubmit={(e) => searchArtists(e, 0)}>
        <input
          type="text"
          className="h-8 pt-1"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button className="btn-primary ml-2" type={"submit"}>
          Search
        </button>
      </form>
      <div className="mt-4">
        <Results
          hasBeenRun={hasBeenRun}
          artists={currentRecords}
          offset={offset}
          setOffset={setOffset}
          searchArtists={searchArtists}
        />
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default SearchParams;
