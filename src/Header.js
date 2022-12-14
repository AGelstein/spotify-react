const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = "http://localhost:3000";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

const Header = ({ token, setToken }) => {
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <div className="bg-blue-600 shadow-md  z-50 w-full px-5 py-2 flex justify-between items-center">
      <router-link to="/" class="text-2xl text-white">
        Spotify React App
      </router-link>
      <div className="text-white px-3 rounded py-1">
        {!token && token !== 0 ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default Header;
