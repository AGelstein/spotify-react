import Playlist from "./Playlist";

const PlaylistResultsGrid = ({ playlists, hasBeenRun, token }) => {
  return (
    <div>
      <div className="gap-4 max-w-xs">
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
                token={token}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default PlaylistResultsGrid;
