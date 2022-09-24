import Song from "./Song";

const Playlist = (props) => {
  const { id, images, name, token } = props;

  return (
    <div className="flex space-x-4 w-full">
      <div className="block bg-white p-3 pb-6">
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
      <Song playlistId={id} className="" token={token} />
    </div>
  );
};

export default Playlist;
