import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { AiFillLike } from "react-icons/ai";
import { MdWatchLater, MdFeaturedPlayList } from "react-icons/md";
import { useEffect, useState } from "react";

import { useAuth, useToast, useVideo } from "../../context";
import {
  SecondaryBtnOutline,
  VideoCard,
  Loader,
  PrimaryBtn,
  ReactPortal,
  Modal,
} from "../../component";
import {
  getVideo,
  getRelatedVideos,
  handleLike,
  handleWatchLater,
} from "./utils/utils";
import { addToHistory } from "../../utils/server-requests";
import { isInList } from "../../utils/helper-functions";

export const SingleVideoPage = () => {
  const { id } = useParams();
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isButtonActionLoading, setIsButtonActionLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {
    state: { videos, likedVideos, watchLater },
    dispatch,
  } = useVideo();

  const {
    state: { token },
  } = useAuth();

  const { setToastMessage } = useToast();

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
                url={currentVideo.url}
                width="100%"
                height="100%"
                className="video"
                controls
                onStart={() => addToHistory(token, currentVideo, dispatch)}
              />
            </div>

            <div className="video-infomation flex">
              <div className="mt-1">
                <h1 className="h4 txt-semibold">{currentVideo.title}</h1>
                <p>{currentVideo.description}</p>
              </div>
            </div>

            <div className="video-action-btns my-1 flex flex-column">
              <div className="btn-row">
                <SecondaryBtnOutline
                  onClick={() =>
                    handleLike(
                      token,
                      setToastMessage,
                      currentVideo,
                      likedVideos,
                      dispatch,
                      setIsButtonActionLoading
                    )
                  }
                  cnames={
                    isInList(likedVideos, currentVideo.videoId)
                      ? "isActive"
                      : ""
                  }
                  disable={isButtonActionLoading}
                >
                  <AiFillLike className="mr-sm" />
                  <span>Like</span>
                </SecondaryBtnOutline>
                <SecondaryBtnOutline
                  disable={isButtonActionLoading}
                  cnames={
                    isInList(watchLater, currentVideo.videoId) ? "isActive" : ""
                  }
                  onClick={() => {
                    handleWatchLater(
                      token,
                      setToastMessage,
                      currentVideo,
                      watchLater,
                      dispatch,
                      setIsButtonActionLoading
                    );
                  }}
                >
                  <MdWatchLater className="mr-sm" />
                  <span>Watch Later</span>
                </SecondaryBtnOutline>
              </div>
              <div className="btn-row">
                <SecondaryBtnOutline
                  disable={isButtonActionLoading}
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
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

          {showModal && (
            <ReactPortal>
              <Modal
                closeModal={() => setShowModal(false)}
                from="video-page"
                currentVideo={currentVideo}
              />
            </ReactPortal>
          )}
        </main>
      )}
    </div>
  );
};
