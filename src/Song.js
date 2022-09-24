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
    <div className="bg-gray-800 w-full p-3 pb-6">
      {!songs?.items?.length ? (
        <h1>No songs on playlist</h1>
      ) : (
        songs.items.map((song) => {
          <div key={song.track.id}></div>;
          console.log(song.track.name);
        })
      )}
    </div>
  );
};

export default Song;
