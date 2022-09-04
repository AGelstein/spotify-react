const Artist = (props) => {
  const { images, name } = props;

  return (
    <div className="relative block bg-white p-3 pb-6">
      {images.length ? (
        <img
          className="object-cover object-center w-full h-full"
          src={images[0].url}
          alt=""
        />
      ) : (
        <div className="object-cover object-center w-full h-full">
          No Artist Image Available
        </div>
      )}
      {name}
    </div>
  );
};

export default Artist;
