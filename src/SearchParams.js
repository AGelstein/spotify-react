import { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";

const SearchParams = ({ token }) => {
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
  const [hasBeenRun, setHasBeenRun] = useState(false);
  const [offset, setOffset] = useState(0);

  //TODO need to export this function to a separate file
  const searchArtists = async (e) => {
    e.preventDefault();
    console.log("offset in parent ", offset);
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit: 6,
        offset: offset,
        q: searchKey,
        type: "artist",
      },
    });

    setArtists(data.artists.items);
    setHasBeenRun(true);
  };

  // IF YOU WANT PAGES TO STAY IN SYNC YOU GOTTA USE THE USEEFFECT
  useEffect(() => {
    console.log("offset inside useEffect", offset);
  }, [offset]);

  return (
    <div className="my-0 mx-auto w-11/12">
      <form onSubmit={searchArtists}>
        <input
          type="text"
          className="h-8 pt-1"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button
          className="h-full inline-block ml-2 b-1 px-6 py-2.5 bg-blue-600 text-white
           font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700
            hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
             active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          type={"submit"}
        >
          Search
        </button>
      </form>
      <div className="mt-4">
        <Results
          hasBeenRun={hasBeenRun}
          artists={artists}
          offset={offset}
          setOffset={setOffset}
          searchArtists={searchArtists}
        />
      </div>
    </div>
  );
};

export default SearchParams;
