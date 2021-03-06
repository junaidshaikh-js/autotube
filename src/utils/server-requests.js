import axios from "axios";
import { constants } from "../context/video-data-context/utils/constants";

const updateLocalStorage = (key, value) => {
  const userData = JSON.parse(localStorage.getItem("user"));

  const updatedUserData = { ...userData, [key]: value };

  localStorage.setItem("user", JSON.stringify(updatedUserData));
};

// history
export const getHistory = async (token, dispatch, setIsLoading) => {
  if (token) {
    setIsLoading(true);
    const history = JSON.parse(localStorage.getItem("user")).history;

    dispatch({ type: constants.setHistory, payload: history });

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }
};

export const addToHistory = async (token, video, dispatch) => {
  try {
    const res = await axios({
      url: "/api/user/history",
      method: "post",
      headers: {
        authorization: token,
      },
      data: {
        video,
      },
    });

    if (res.status == 200 || res.status == 201) {
      dispatch({ type: constants.addToHistory, payload: res.data.history });

      updateLocalStorage("history", res.data.history);
    }
  } catch (error) {
    throw new Error("Video can not be added to history");
  }
};

export const deleteHistory = async (token, id, dispatch, setToastMessage) => {
  try {
    const res = await axios({
      url: `/api/user/history/${id}`,
      method: "delete",
      headers: {
        authorization: token,
      },
    });

    if (res.status == 200 || res.status == 201) {
      dispatch({ type: constants.deleteHistory, payload: res.data.history });

      setToastMessage({
        type: "success",
        message: "Video deleted from history",
      });

      updateLocalStorage("history", res.data.history);
    }
  } catch (error) {
    setToastMessage({
      type: "error",
      message: "Can not delete. Try again later.",
    });
    throw new Error("Video can not be added to history");
  }
};

export const deleteAllHistory = async (token, dispatch, setToastMessage) => {
  try {
    const res = await axios({
      url: `/api/user/history/all`,
      method: "delete",
      headers: {
        authorization: token,
      },
    });

    if (res.status == 200 || res.status == 201) {
      dispatch({ type: constants.deleteAllHistory, payload: res.data.history });

      setToastMessage({
        type: "success",
        message: "History cleared.",
      });

      updateLocalStorage("history", res.data.history);
    }
  } catch (error) {
    setToastMessage({
      type: "error",
      message: "Can not clear history. Try again later.",
    });

    throw new Error("Video can not be added to history");
  }
};

// like videos
export const addToLikedVideos = async (
  token,
  video,
  dispatch,
  setToastMessage,
  isLoading
) => {
  isLoading(true);
  try {
    const res = await axios({
      url: "/api/user/likes",
      method: "post",
      data: {
        video,
      },
      headers: {
        authorization: token,
      },
    });

    if (res.status == 200 || res.status == 201) {
      dispatch({ type: constants.addToLikedVideos, payload: res.data.likes });

      updateLocalStorage("likes", res.data.likes);

      setToastMessage({ type: "success", message: "Added to liked videos" });
    }
    isLoading(false);
  } catch (error) {
    isLoading(false);
    setToastMessage({ type: "error", message: "Please try again later" });
    throw new Error("Failed to add to liked videos");
  }
};

export const removeFromLikedVideos = async (
  token,
  id,
  dispatch,
  setToastMessage,
  isLoading
) => {
  isLoading?.(true);
  try {
    const res = await axios({
      url: `/api/user/likes/${id}`,
      method: "delete",
      headers: {
        authorization: token,
      },
    });

    if (res.status == 200 || res.status == 201) {
      dispatch({
        type: constants.removeFromLikedVideos,
        payload: res.data.likes,
      });

      updateLocalStorage("likes", res.data.likes);

      setToastMessage({
        type: "success",
        message: "Removed from liked videos",
      });
    }

    isLoading?.(false);
  } catch (error) {
    isLoading?.(false);
    setToastMessage({ type: "error", message: "Please try again later" });
    throw new Error("Failed to remove from liked videos");
  }
};

// watch later

export const addToWatchLater = async (
  token,
  video,
  dispatch,
  setToastMessage,
  isLoading
) => {
  isLoading(true);
  try {
    const res = await axios({
      url: "/api/user/watchlater",
      method: "post",
      data: {
        video,
      },
      headers: {
        authorization: token,
      },
    });

    if (res.status == 200 || res.status == 201) {
      const { watchlater } = res.data;
      dispatch({
        type: constants.addToWatchLater,
        payload: watchlater,
      });

      updateLocalStorage("watchlater", watchlater);

      setToastMessage({ type: "success", message: "Added to watch later." });
    }
    isLoading(false);
  } catch (error) {
    isLoading(false);
    setToastMessage({ type: "error", message: "Please try again later" });
    throw new Error("Failed to add to watch later");
  }
};

export const removeFromWatchLater = async (
  token,
  id,
  dispatch,
  setToastMessage,
  isLoading
) => {
  isLoading?.(true);
  try {
    const res = await axios({
      url: `/api/user/watchlater/${id}`,
      method: "delete",
      headers: {
        authorization: token,
      },
    });

    if (res.status == 200 || res.status == 201) {
      const { watchlater } = res.data;
      dispatch({
        type: constants.addToWatchLater,
        payload: watchlater,
      });

      updateLocalStorage("watchlater", watchlater);

      setToastMessage({
        type: "success",
        message: "Removed from watch later",
      });
    }

    isLoading?.(false);
  } catch (error) {
    isLoading?.(false);
    setToastMessage({ type: "error", message: "Please try again later" });
    throw new Error("Failed to remove from watch later");
  }
};

// playlists

export const addToPlaylist = async (
  dispatch,
  token,
  setToastMessage,
  playlist
) => {
  try {
    const res = await axios({
      url: `/api/user/playlists`,
      method: "post",
      headers: {
        authorization: token,
      },
      data: {
        playlist,
      },
    });

    if (res.status == 200 || res.status == 201) {
      const { playlists } = res.data;
      dispatch({
        type: constants.addPlaylist,
        payload: playlists,
      });

      updateLocalStorage("playlists", playlists);

      setToastMessage({
        type: "success",
        message: "Playlist added",
      });
    }
  } catch (error) {
    setToastMessage({ type: "error", message: "Please try again later" });
    throw new Error("Failed to add playlist.");
  }
};

export const deletePlaylist = async (token, dispatch, id, setToastMessage) => {
  try {
    const res = await axios({
      url: `/api/user/playlists/${id}`,
      method: "delete",
      headers: {
        authorization: token,
      },
    });

    if (res.status == 200 || res.status == 201) {
      const { playlists } = res.data;
      dispatch({
        type: constants.deletePlaylist,
        payload: playlists,
      });

      updateLocalStorage("playlists", playlists);

      setToastMessage({
        type: "success",
        message: "Playlist deleted",
      });
    }
  } catch (error) {
    setToastMessage({ type: "error", message: "Please try again later" });
    throw new Error("Failed to delete playlist.");
  }
};

export const addVideoToPlaylist = async (
  dispatch,
  token,
  setToastMessage,
  playlist,
  currentVideo,
  playlistsArray
) => {
  try {
    const res = await axios({
      url: `/api/user/playlists/${playlist._id}`,
      method: "post",
      headers: {
        authorization: token,
      },
      data: {
        video: currentVideo,
      },
    });
    if (res.status == 200 || res.status == 201) {
      const { playlist } = res.data;
      dispatch({
        type: constants.addVideoToPlaylist,
        payload: playlist,
      });

      const playlists = playlistsArray.map((_playlist) =>
        playlist._id == _playlist._id ? playlist : _playlist
      );

      updateLocalStorage("playlists", playlists);

      setToastMessage({
        type: "success",
        message: "Video Added to playlist",
      });
    }
  } catch (error) {
    setToastMessage({ type: "error", message: "Please try again later" });
    throw new Error("Failed to add playlist.");
  }
};

export const removeVideoFromPlaylist = async (
  dispatch,
  token,
  setToastMessage,
  playlist,
  currentVideo,
  playlistsArray
) => {
  try {
    const res = await axios({
      url: `/api/user/playlists/${playlist._id}/${currentVideo._id}`,
      method: "delete",
      headers: {
        authorization: token,
      },
      data: {
        video: currentVideo,
      },
    });
    if (res.status == 200 || res.status == 201) {
      const { playlist } = res.data;
      dispatch({
        type: constants.removeVideoFromPlaylist,
        payload: playlist,
      });

      const playlists = playlistsArray.map((_playlist) =>
        playlist._id == _playlist._id ? playlist : _playlist
      );

      updateLocalStorage("playlists", playlists);

      setToastMessage({
        type: "success",
        message: "Video removed from playlist",
      });
    }
  } catch (error) {
    setToastMessage({ type: "error", message: "Please try again later" });
    throw new Error("Failed to add playlist.");
  }
};
