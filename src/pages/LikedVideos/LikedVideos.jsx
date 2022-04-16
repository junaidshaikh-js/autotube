import { Link } from "react-router-dom";

import { useAuth, useToast, useVideo } from "../../context";
import { removeFromLikedVideos } from "../../utils/server-requests";
import { HorizontalVideoCard } from "../../component";

export const LikedVideos = () => {
  const {
    state: { likedVideos },
    dispatch,
  } = useVideo();

  const {
    state: { token },
  } = useAuth();

  const { setToastMessage } = useToast();

  return (
    <div className="wrapper">
      {!likedVideos.length ? (
        <main className="empty-page txt-center flex flex-center flex-column">
          <p>This page seems to be empty.</p>
          <Link to="/explore"> Add some videos now.</Link>
        </main>
      ) : (
        <main className="page-main mt-2">
          <header className="flex justify-between align-center">
            <h1 className="h2 section-heading">Liked Videos</h1>
          </header>

          <section className="mt-2">
            {likedVideos.map((video) => (
              <HorizontalVideoCard
                video={video}
                key={video.videoId}
                onClick={() =>
                  removeFromLikedVideos(
                    token,
                    video._id,
                    dispatch,
                    setToastMessage
                  )
                }
              />
            ))}
          </section>
        </main>
      )}
    </div>
  );
};
