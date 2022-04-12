import { useVideo } from "../../context";
import { VideoCard, Filters } from "../../component";

export const VideoListing = () => {
  const {
    state: { videos, categoryFilter },
  } = useVideo();

  const filteredVideos = videos.filter((video) => {
    if (categoryFilter) {
      return video.categoryName.toLowerCase() == categoryFilter;
    }

    return true;
  });

  return (
    <div className="wrapper mt-2">
      <main className="video-listing-main">
        <div>
          <Filters />
        </div>
        <section className="video-container">
          {filteredVideos.map((video) => {
            return <VideoCard video={video} key={video._id} />;
          })}
        </section>
      </main>
    </div>
  );
};
