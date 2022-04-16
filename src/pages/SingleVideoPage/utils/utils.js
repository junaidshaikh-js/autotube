import axios from "axios";
import { isInList } from "../../../utils/helper-functions";
import {
  addToLikedVideos,
  removeFromLikedVideos,
} from "../../../utils/server-requests";

export const getVideo = async (setIsLoading, setCurrentVideo, id) => {
  try {
    setIsLoading(true);
    const res = await axios.get(`/api/video/${id}`);

    if (res.status == 200 || res.status == 201) {
      setCurrentVideo(res.data.video);
    }

    setIsLoading(false);
  } catch (error) {
    setIsLoading(false);
    throw new Error("Can not fetch videos");
  }
};

export const getRelatedVideos = (videos, currentVideo) =>
  videos.filter(
    (video) =>
      video.categoryName == currentVideo?.categoryName &&
      video.videoId != currentVideo?.videoId
  );

export const handleLike = (
  token,
  setToastMessage,
  currentVideo,
  likedVideos,
  dispatch,
  isLoading
) => {
  if (!token) {
    setToastMessage({ type: "error", message: "Please login first." });
  } else {
    if (!isInList(likedVideos, currentVideo.videoId)) {
      addToLikedVideos(
        token,
        currentVideo,
        dispatch,
        setToastMessage,
        isLoading
      );
    } else {
      removeFromLikedVideos(
        token,
        currentVideo._id,
        dispatch,
        setToastMessage,
        isLoading
      );
    }
  }
};
