import { useState } from "react";
import axios from "axios";
import Results from "./Results";

const SearchParams = ({ token }) => {
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
  console.log("searchparams", { artists });

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });

    setArtists(data.artists.items);
  };

  return (
    <div className="my-0 mx-auto w-11/12">
      <form onSubmit={searchArtists}>
        <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
        <button
          className="inline-block ml-2 b-1 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          type={"submit"}
        >
          Search
        </button>
      </form>
      <Results artists={artists} />
      {/* <Artist artists={artists} /> */}
    </div>
  );
};

export default SearchParams;
