const Playlist = (props) => {
  const { id, images, name } = props;
  console.log(id);

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
