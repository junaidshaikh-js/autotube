import { FaTrash } from "react-icons/fa";

import { months } from "../../utils/constants";
import { deleteHistory } from "../../utils/server-requests";
import { useAuth, useToast, useVideo } from "../../context";

export const HorizontalVideoCard = ({ video }) => {
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
    <article className="horizontal-card my-1 flex">
      <figure className="txt-center thumbnail mr-1">
        <img src={thumbnail} alt="video thumbnail" width="300" height="180" />
      </figure>

      <div className="horizontal-card--details flex mt-sm mr-1">
        <div className="ml-sm pr-2 mr-2 ">
          <p className="mb-sm mt-0 video-title">{title}</p>
          <span className="txt-secondary">{channelName}</span>
          <div className="flex txt-secondary mt-sm">
            <span className="video-views">{views} views</span>
            <span>{`${day} ${month} ${year}`}</span>
          </div>
        </div>

        <div className="history-delete-btn">
          <button
            className="btn"
            onClick={() =>
              deleteHistory(token, video._id, dispatch, setToastMessage)
            }
          >
            <FaTrash title="delete" fontSize="1.2rem" color="red" />
          </button>
        </div>
      </div>
    </article>
  );
};
