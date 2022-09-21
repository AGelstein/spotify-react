import { useEffect, useState } from "react";
import axios from "axios";

const Song = ({ playlistId, token }) => {
  const SONGS_ENDPOINT = "https://api.spotify.com/v1/playlists/";
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    requestSongs();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestSongs() {
    const { data } = await axios.get(SONGS_ENDPOINT + playlistId + "/tracks", {
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

  return (
    <div className="relative block bg-white p-3 pb-6">
      {!songs.items.length ? (
        <h1>No songs on playlist</h1>
      ) : (
        console.log("song: " + songs.items)
      )}
      )
    </div>
  );
};

export default Song;
