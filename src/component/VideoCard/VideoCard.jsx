const months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const VideoCard = ({ video }) => {
  const { thumbnail, title, views, createdAt, channelName, channelImage } =
    video;

  const date = new Date(createdAt);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();

  return (
    <article className="video-card mt-sm mb-1">
      <figure className="txt-center thumbnail">
        <img src={thumbnail} alt="video thumbnail" />
      </figure>
      <p className="mt-sm mb-0">{title}</p>

      <div className="flex mt-sm">
        <img
          src={channelImage}
          alt={channelName}
          className="channel-image img-round"
        />
        <div className="txt-secondary ml-1">
          <span>{channelName}</span>
          <div className="flex">
            <span className="mr-sm video-views">{views}</span>
            <span>{`${day} ${month} ${year}`}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
