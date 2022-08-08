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
          className="px-2  bg-slate-100 hover:bg-gray-700"
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
