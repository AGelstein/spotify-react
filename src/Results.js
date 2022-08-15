import Artist from "./Artist";

const Results = ({ hasBeenRun, artists, offset, searchArtists }) => {
  const pageFwd = (e) => {
    e.preventDefault();
    searchArtists(e, offset + 6);
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
