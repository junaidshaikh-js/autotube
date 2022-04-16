import { createContext, useContext, useReducer, useEffect } from "react";

import { videoReducer } from "./video-reducer";
import {
  getCategories,
  getLikedVideos,
  getProducts,
} from "./utils/server-request";
import { useAuth } from "../auth-context/auth-context";

const initialValue = {
  videos: [],
  categories: [],
  history: [],
  likedVideos: [],
  categoryFilter: "",
};

const VideoDataContext = createContext(initialValue);

const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, initialValue);

  const {
    state: { token },
  } = useAuth();

  useEffect(() => {
    getCategories(dispatch), getProducts(dispatch);
    getLikedVideos(dispatch, token);
  }, []);
  const value = { state, dispatch };

  return (
    <VideoDataContext.Provider value={value}>
      {children}
    </VideoDataContext.Provider>
  );
};

const useVideo = () => useContext(VideoDataContext);

export { VideoProvider, useVideo };
