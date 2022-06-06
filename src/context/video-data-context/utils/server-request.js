import axios from "axios";

import { constants } from "./constants";

const {
  setVideos,
  setCategories,
  setLikedVideos,
  setWatchLater,
  setPlaylists,
} = constants;

export const getProducts = async (dispatch) => {
  try {
    const res = await axios.get("/api/videos");

    if (res.status == 200 || res.status == 201) {
      dispatch({ type: setVideos, payload: res.data.videos });
    }
  } catch (error) {
    throw new Error("Can not fetch videos");
  }
};

export const getCategories = async (disaptch) => {
  try {
    const res = await axios.get("/api/categories");

    if (res.status == 200 || res.status == 201) {
      disaptch({ type: setCategories, payload: res.data.categories });
    }
  } catch (error) {
    throw new Error("can not fetch categories");
  }
};

export const getLikedVideos = async (dispatch, token) => {
  if (token) {
    const likes = JSON.parse(localStorage.getItem("user")).likes;

    dispatch({ type: setLikedVideos, payload: likes });
  }
};

export const getWatchLater = async (dispatch, token) => {
  if (token) {
    const watchLater = JSON.parse(localStorage.getItem("user")).watchlater;

    dispatch({ type: setWatchLater, payload: watchLater });
  }
};

export const getPlaylists = async (dispatch, token) => {
  if (token) {
    const playlists = JSON.parse(localStorage.getItem("user")).playlists;

    dispatch({ type: setPlaylists, payload: playlists });
  }
};
