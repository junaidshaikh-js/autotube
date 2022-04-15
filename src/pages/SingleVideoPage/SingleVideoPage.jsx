import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { AiFillLike } from "react-icons/ai";
import { MdWatchLater, MdFeaturedPlayList } from "react-icons/md";
import { useEffect, useState } from "react";

import { useVideo } from "../../context";
import {
  SecondaryBtnOutline,
  VideoCard,
  Loader,
  PrimaryBtn,
} from "../../component";
import { getVideo, getRelatedVideos } from "./utils/utils";

export const SingleVideoPage = () => {
  const { id } = useParams();
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    state: { videos },
  } = useVideo();

  useEffect(() => {
    getVideo(setIsLoading, setCurrentVideo, id);
  }, [id]);

  const relatedVideos = getRelatedVideos(videos, currentVideo);

  return (
    <div className="wrapper">
      {isLoading ? (
        <Loader />
      ) : (
        <main className="single-video-main my-2">
          <section className="video-details">
            <div className="video-player-container">
              <ReactPlayer
                url={currentVideo?.url}
                width="100%"
                height="100%"
                className="video"
                controls
              />
            </div>

            <div className="video-infomation flex">
              <div className="mt-1">
                <h1 className="h4 txt-semibold">{currentVideo?.title}</h1>
                <p>{currentVideo?.description}</p>
              </div>
            </div>

            <div className="video-action-btns my-1 flex flex-column">
              <div className="btn-row">
                <SecondaryBtnOutline>
                  <AiFillLike className="mr-sm" />
                  <span>Like</span>
                </SecondaryBtnOutline>
                <SecondaryBtnOutline>
                  <MdWatchLater className="mr-sm" />
                  <span>Watch Later</span>
                </SecondaryBtnOutline>
              </div>
              <div className="btn-row">
                <SecondaryBtnOutline>
                  <MdFeaturedPlayList className="mr-sm" />
                  <span>Add to Playlist</span>
                </SecondaryBtnOutline>
              </div>
            </div>

            <div className="flex align-center mt-2">
              <figure className="mr-1">
                <img
                  src={currentVideo?.channelImage}
                  alt={currentVideo?.channelName}
                  className="channel-image img-round"
                />
              </figure>
              <div>
                <span>{currentVideo?.channelName} </span>
              </div>
              <PrimaryBtn cnames="ml-auto">Subscribe</PrimaryBtn>
            </div>
          </section>

          <section className="related-video-section">
            <p className="h3 section-heading mt-2">Related Videos</p>
            <div className="video-container">
              {relatedVideos.map((video) => {
                return (
                  <Link to={`/watch/${video.videoId}`} key={video.videoId}>
                    <VideoCard video={video} />
                  </Link>
                );
              })}
            </div>
          </section>
        </main>
      )}
    </div>
  );
};