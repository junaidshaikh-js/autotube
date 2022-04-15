import { createContext, useContext, useReducer, useEffect } from "react";

import { videoReducer } from "./video-reducer";
import { getCategories, getProducts } from "./utils/server-request";

const initialValue = {
  videos: [],
  categories: [],
  history: [],
  categoryFilter: "",
};

const VideoDataContext = createContext(initialValue);

const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, initialValue);

  useEffect(() => {
    getCategories(dispatch), getProducts(dispatch);
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
