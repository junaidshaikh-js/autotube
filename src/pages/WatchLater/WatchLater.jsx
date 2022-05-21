import { Link } from "react-router-dom";

import { useAuth, useToast, useVideo } from "../../context";
import { HorizontalVideoCard } from "../../component";
import { removeFromWatchLater } from "../../utils/server-requests";

export const WatchLater = () => {
  const {
    state: { watchLater },
    dispatch,
  } = useVideo();

  const {
    state: { token },
  } = useAuth();

  const { setToastMessage } = useToast();

  return (
    <div className="wrapper">
      {!watchLater.length ? (
        <main className="empty-page txt-center flex flex-center flex-column">
          <p>This page seems to be empty.</p>
          <Link to="/explore"> Add some videos now.</Link>
        </main>
      ) : (
        <main className="page-main mt-2">
          <header className="flex justify-between align-center">
            <h1 className="h2 section-heading">
              Watch Later ({" "}
              {`${watchLater.length} ${
                watchLater.length > 1 ? "videos" : "video"
              }`}{" "}
              )
            </h1>
          </header>

          <section className="mt-2">
            {watchLater.map((video) => (
              <HorizontalVideoCard
                video={video}
                key={video.videoId}
                onClick={() => {
                  removeFromWatchLater(
                    token,
                    video._id,
                    dispatch,
                    setToastMessage
                  );
                }}
              />
            ))}
          </section>
        </main>
      )}
    </div>
  );
};
