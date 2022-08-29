import Artist from "./Artist";

const Results = ({ hasBeenRun, artists }) => {
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
    </div>
  );
};

export default Results;
