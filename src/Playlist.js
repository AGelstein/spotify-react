import Song from "./Song";

const Playlist = (props) => {
  const { id, images, name, token } = props;

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
      <Song className="float-right" playlistId={id} token={token} />
    </div>
  );
};

export default Playlist;
