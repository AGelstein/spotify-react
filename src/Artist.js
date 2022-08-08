const Artist = (props) => {
  const { images, name } = props;

  return (
    <div className="relative block">
      {images.length ? (
        <img
          className="object-cover object-center w-full h-full"
          src={images[0].url}
          alt=""
        />
      ) : (
        <div>No Image</div>
      )}
      {name}
    </div>
  );
};

export default Artist;
