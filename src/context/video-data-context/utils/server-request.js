import axios from "axios";

import { constants } from "./constants";

const { setVideos, setCategories } = constants;

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
    console.log(error);
    throw new Error("can not fetch categories");
  }
};