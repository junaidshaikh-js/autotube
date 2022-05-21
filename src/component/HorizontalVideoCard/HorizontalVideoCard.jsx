import { FaTrash } from "react-icons/fa";

import { months } from "../../utils/constants";
import { useAuth, useToast, useVideo } from "../../context";
import { Link } from "react-router-dom";

export const HorizontalVideoCard = ({ video, onClick }) => {
  const { thumbnail, title, views, createdAt, channelName } = video;

  const {
    state: { token },
  } = useAuth();

  const { dispatch } = useVideo();

  const { setToastMessage } = useToast();

  const date = new Date(createdAt);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();

  return (
    <article className="horizontal-card my-2 flex">
      <Link to={`/watch/${video.videoId}`}>
        <figure className="txt-center thumbnail mr-1">
          <img src={thumbnail} alt="video thumbnail" width="300" height="180" />
        </figure>
      </Link>

      <div className="horizontal-card--details flex mt-sm mr-1">
        <Link to={`/watch/${video.videoId}`}>
          <div className="ml-sm pr-2 mr-2 ">
            <p className="mb-sm mt-0 video-title">{title}</p>
            <span className="txt-secondary">{channelName}</span>
            <div className="flex txt-secondary mt-sm">
              <span className="video-views mr-sm">{views} views.</span>
              <span>{`${day} ${month} ${year}`}</span>
            </div>
          </div>
        </Link>

        <div className="delete-btn">
          <button className="btn" onClick={onClick}>
            <FaTrash title="delete" fontSize="1.2rem" color="red" />
          </button>
        </div>
      </div>
    </article>
  );
};
