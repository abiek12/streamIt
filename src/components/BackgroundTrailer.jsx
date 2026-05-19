const BackgroundTrailer = (props) => {
  const { videoKey } = props;

  return (
    <div className="relative h-dvh overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full scale-150 pointer-events-none"
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoKey}&modestbranding=1&rel=0`}
        title="Background Trailer"
        allow="autoplay; encrypted-media"
      />
    </div>
  );
};

export default BackgroundTrailer;
