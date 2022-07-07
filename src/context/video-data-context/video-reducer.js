import { constants } from "./utils/constants";

const {
  setVideos,
  setCategories,
  filter,
  setHistory,
  addToHistory,
  deleteHistory,
  deleteAllHistory,
  setLikedVideos,
  addToLikedVideos,
  removeFromLikedVideos,
  setWatchLater,
  addToWatchLater,
  removeFromWatchLater,
  setPlaylists,
  addPlaylist,
  deletePlaylist,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
  logout,
} = constants;

export const videoReducer = (state, { type, payload }) => {
  switch (type) {
    case setVideos:
      return {
        ...state,
        videos: payload,
      };
    case setCategories:
      return {
        ...state,
        categories: payload,
      };
    case setHistory:
    case addToHistory:
    case deleteHistory:
    case deleteAllHistory:
      return {
        ...state,
        history: payload,
      };
    case setLikedVideos:
    case addToLikedVideos:
    case removeFromLikedVideos:
      return {
        ...state,
        likedVideos: payload,
      };
    case setWatchLater:
    case addToWatchLater:
    case removeFromWatchLater:
      return {
        ...state,
        watchLater: payload,
      };
    case setPlaylists:
    case addPlaylist:
    case deletePlaylist:
      return {
        ...state,
        playlists: payload,
      };
    case addVideoToPlaylist:
    case removeVideoFromPlaylist:
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id == payload._id ? payload : playlist
        ),
      };
    case filter:
      return {
        ...state,
        categoryFilter: payload,
      };
    case logout:
      return {
        ...state,
        history: [],
        likedVideos: [],
        watchLater: [],
        playlists: [],
        categoryFilter: "",
      };
    default:
      throw new Error(`Unhandled action type ${type}`);
  }
};
