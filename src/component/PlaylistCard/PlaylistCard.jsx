import { Link } from "react-router-dom";

import { MdPlaylistAdd } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { deletePlaylist } from "../../utils/server-requests";
import { useAuth, useToast, useVideo } from "../../context";

export const PlaylistCard = ({ playlist }) => {
  const { _id, videos, title, description } = playlist;
  const {
    state: { token },
  } = useAuth();

  const { dispatch } = useVideo();

  const { setToastMessage } = useToast();

  return (
    <Link to={`/playlist/${_id}`} className="playlist-card">
      <article className="my-1 p-sm">
        <div className="flex flex-center img-container">
          {videos.length ? (
            <figure>
              <img
                src={videos[0].thumbnail}
                alt="thumbnail of first video in the playlist"
              />
            </figure>
          ) : (
            <div className="txt-center">
              <MdPlaylistAdd fontSize="4rem" color="hsl(1, 91%, 38%)" />
              <p>Add Vidoes</p>
            </div>
          )}
        </div>
        <div className="flex justify-between playlist-details">
          <div className="mr-1">
            <h2 className="h4">{title}</h2>
            <p className="txt-secondary my-0 ">
              {videos.length > 1
                ? `${videos.length} videos`
                : `${videos.length} video`}
            </p>
            <p>{description}</p>
          </div>
          <div>
            <button
              className="btn playlist-delete-btn"
              onClick={(e) => {
                e.preventDefault();
                deletePlaylist(token, dispatch, _id, setToastMessage);
              }}
            >
              <FaTrash title="delete" fontSize="1.2rem" color="red" />
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
};
