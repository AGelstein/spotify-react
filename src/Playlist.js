import { useEffect, useState } from "react";
import axios from "axios";

const PLAYLISTS_SONGS_ENDPOINT = "https://api.spotify.com/v1/playlists/";

const Playlist = (props) => {
  const { id, images, name, token } = props;
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    requestSongs();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestSongs() {
    const { data } = await axios.get(PLAYLISTS_SONGS_ENDPOINT + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit: 40,
        offset: 0,
      },
    });
    setSongs(data);
  }

  console.log(songs);

  return (
    <div className="relative block bg-white p-3 pb-6">
      {images.length ? (
        <img
          className="object-cover object-center w-full h-full"
          src={images[0].url}
          alt=""
        />
      ) : (
        <div className="bg-white w-full h-full">
          No Playlist Image Available
        </div>
      )}
      {name}
    </div>
  );
};

export default Playlist;
