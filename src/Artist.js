const Artist = (props) => {
  const { images, name } = props;

  return (
    <div className="relative block">
      {images.length ? (
        <img width={"100%"} src={images[0].url} alt="" />
      ) : (
        <div>No Image</div>
      )}
      {name}
    </div>
  );
};

export default Artist;
