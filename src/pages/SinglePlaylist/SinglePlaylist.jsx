import { useParams, Link } from "react-router-dom";
import { HorizontalVideoCard } from "../../component";
import { useAuth, useToast, useVideo } from "../../context";
import { removeVideoFromPlaylist } from "../../utils/server-requests";

export const SinglePlaylist = () => {
  const { playlistId } = useParams();

  const {
    state: { playlists },
    dispatch,
  } = useVideo();

  const {
    state: { token },
  } = useAuth();

  const { setToastMessage } = useToast();

  const playlist =
    playlists.find((_playlist) => {
      return _playlist._id == playlistId;
    }) || {};

  return (
    <>
      {playlist.videos?.length ? (
        <div className="wrapper">
          <main className="page-main mt-2">
            <section>
              {playlist.videos.map((video) => (
                <HorizontalVideoCard
                  video={video}
                  onClick={() =>
                    removeVideoFromPlaylist(
                      dispatch,
                      token,
                      setToastMessage,
                      playlist,
                      video,
                      playlists
                    )
                  }
                />
              ))}
            </section>
          </main>
        </div>
      ) : (
        <main className="empty-page txt-center flex flex-center flex-column">
          <p>This page seems to be empty.</p>
          <Link to="/explore"> Add some videos now.</Link>
        </main>
      )}
    </>
  );
};
