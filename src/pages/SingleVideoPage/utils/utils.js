import axios from "axios";

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
