import { months } from "../../utils/constants";

export const VideoCard = ({ video }) => {
  const { thumbnail, title, views, createdAt, channelName, channelImage } =
    video;

  const date = new Date(createdAt);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();

  return (
    <article className="video-card my-1">
      <figure className="txt-center thumbnail">
        <img src={thumbnail} alt="video thumbnail" width="300" height="180" />
      </figure>

      <div className="flex mt-sm mr-1">
        <img
          src={channelImage}
          alt={channelName}
          className="channel-image img-round"
        />
        <div className="ml-sm">
          <p className="mb-sm mt-0 video-title">{title}</p>
          <span className="txt-secondary">{channelName}</span>
          <div className="flex txt-secondary mt-sm">
            <span className="video-views">{views} views</span>
            <span>{`${day} ${month} ${year}`}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
