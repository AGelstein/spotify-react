import Artist from "./Artist";

//TODO remove offset since it's no longer needed
const Results = ({ hasBeenRun, artists, setOffset, offset, searchArtists }) => {
  const pageFwd = (e) => {
    e.preventDefault();
    //TODO rename os to offset
    console.log("offset in child pre-add", offset);
    setOffset((x) => x + 6);
    console.log("offset in child post-add", offset);
    searchArtists(e);
  };

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {!artists.length && hasBeenRun ? (
        <h1>No Artists Found</h1>
      ) : (
        artists.map((artist) => {
          return (
            <Artist
              key={artist.id}
              images={artist.images}
              name={artist.name}
              id={artist.id}
            />
          );
        })
      )}
      <div className="inline-flex">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
          Prev
        </button>
        <button
          onClick={(e) => pageFwd(e)}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Results;
