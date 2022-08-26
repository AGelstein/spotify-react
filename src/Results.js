import Artist from "./Artist";

const Results = ({ hasBeenRun, artists, offset, searchArtists }) => {
  console.log(artists);

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
      <div
        className={
          artists.length === 0
            ? "invisible"
            : "flex space-x-4 justify-between mt-4"
        }
        // TODO: remove the button code below
        // TODO: pass relevant params
      >
        <button onClick={(e) => pageBack(e)} className="btn-primary">
          Prev
        </button>
        <button onClick={(e) => pageFwd(e)} className=" btn-primary">
          Next
        </button>
      </div>
    </div>
  );
};

export default Results;
