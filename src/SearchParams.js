import { useState } from "react";
import axios from "axios";
import ArtistResultsGrid from "./ArtistResultsGrid";
import Pagination from "./Pagination";
import PlaylistResultsGrid from "./PlaylistResultsGrid";

const SearchParams = ({ token }) => {
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [hasArtistSearchRun, setHasArtistSearchRun] = useState(false);
  const [hasPlaylistSearchRun, setHasPlaylistSearchRun] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = artists.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(artists.length / recordsPerPage);

  const clearResults = () => {
    setArtists([]);
    setPlaylists([]);
  };

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
        limit: 50,
        offset: newOffset,
        q: searchKey,
        type: "artist",
      },
    });

    setArtists(data.artists.items);
    setHasArtistSearchRun(true);
  };

  //TODO export this function to more appropriate file
  const searchPlaylists = async () => {
    const { data } = await axios.get(
      "https://api.spotify.com/v1/me/playlists",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          limit: 20,
          offset: 0,
        },
      }
    );
    setPlaylists(data.items);
    setHasPlaylistSearchRun(true);
  };

  return (
    <div className="my-0 mx-auto w-11/12 justify-center items-center">
      <div className="flex">
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
        <button className="btn-primary ml-2" onClick={searchPlaylists}>
          View My Playlists
        </button>
        <button className="btn-primary ml-2" onClick={clearResults}>
          Clear Results
        </button>
      </div>
      <div className="mt-4 ">
        <ArtistResultsGrid
          hasBeenRun={hasArtistSearchRun}
          artists={currentRecords}
        />
        <PlaylistResultsGrid
          hasBeenRun={hasPlaylistSearchRun}
          playlists={playlists}
        />
        <div className={artists.length === 0 ? "invisible" : "visible mt-4"}>
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchParams;
