import Artist from "./Artist";

const Results = ({ hasBeenRun, artists, offset, searchArtists }) => {
  const pageFwd = (e) => {
    e.preventDefault();
    searchArtists(e, offset + 6);
  };

  const pageBack = (e) => {
    e.preventDefault();
    console.log("childoffset", offset);
    searchArtists(e, offset - 6);
  };

  return (
    <div>
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
      </div>
      <div className="flex space-x-4 justify-between mt-4">
        <button
          onClick={(e) => pageBack(e)}
          className=" bg-blue-600 text-white
          font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700
           hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out py-2 px-4 rounded-l"
        >
          Prev
        </button>
        <button
          onClick={(e) => pageFwd(e)}
          className=" bg-blue-600 text-white
          font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700
           hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Results;
