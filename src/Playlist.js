import { useState } from "react";
import axios from "axios";

const Playlist = (props) => {
  const { id, images, name, token } = props;
  const SONGS_ENDPOINT = "https://api.spotify.com/v1/playlists/";
  // eslint-disable-next-line no-unused-vars
  const [songs, setSongs] = useState([]);

  async function requestSongs() {
    const { data } = await axios.get(SONGS_ENDPOINT + id + "/tracks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit: 4,
        offset: 0,
      },
    });
    setSongs(data);
  }

  if (songs.items) {
    songs.items.forEach((song) => {
      console.log(song.track.name);
    });
  }

  return (
    <div className="flex space-x-4 w-full">
      <div className="block bg-white p-3 pb-6">
        {images.length ? (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              requestSongs();
            }}
            onKeyDown={() => requestSongs()}
          >
            <img
              className="object-cover object-center w-full h-full"
              src={images[0].url}
              alt=""
            />
            <div>
              {songs.items ? (
                songs.items.forEach((song) => {
                  return (
                    // eslint-disable-next-line jsx-a11y/heading-has-content
                    <h1>{song.track.name}</h1>
                  );
                })
              ) : (
                <h1>No songs available</h1>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white w-full h-full">
            No Playlist Image Available
          </div>
        )}
        {name}
      </div>
    </div>
  );
};

export default Playlist;
