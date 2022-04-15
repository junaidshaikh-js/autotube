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
    console.log(error);
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
    console.log(error);

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
    console.log(error);

    setToastMessage({
      type: "error",
      message: "Can not clear history. Try again later.",
    });

    throw new Error("Video can not be added to history");
  }
};
