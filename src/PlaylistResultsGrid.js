import Playlist from "./Playlist";

const PlaylistResultsGrid = ({ playlists, hasBeenRun }) => {
  return (
    <div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!playlists.length && hasBeenRun ? (
          <h1>No playlists Found</h1>
        ) : (
          playlists.map((playlists) => {
            return (
              <Playlist
                key={playlists.id}
                images={playlists.images}
                name={playlists.name}
                id={playlists.id}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default PlaylistResultsGrid;
