const BackgroundTrailer = (props) => {
  const { videoKey } = props;

  return (
    <div className="relative h-dvh overflow-hidden">
      <iframe
        className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 scale-150 pointer-events-none"
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&loop=1&playlist=${videoKey}&rel=0&iv_load_policy=3&disablekb=1&fs=0&playsinline=1&enablejsapi=1`}
        title="Background Trailer"
        allow="autoplay; encrypted-media"
      />
    </div>
  );
};

export default BackgroundTrailer;
