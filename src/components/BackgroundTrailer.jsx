const BackgroundTrailer = (props) => {
  const { videoKey } = props;

  return (
    <div>
      <h1>
        <iframe
          src={`https://www.youtube.com/embed/${videoKey}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </h1>
    </div>
  );
};

export default BackgroundTrailer;
