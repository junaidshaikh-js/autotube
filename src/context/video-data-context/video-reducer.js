import { constants } from "./utils/constants";

const {
  setVideos,
  setCategories,
  filter,
  setHistory,
  addToHistory,
  deleteHistory,
  deleteAllHistory,
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
    case filter:
      return {
        ...state,
        categoryFilter: payload,
      };
    default:
      throw new Error(`Unhandled action type ${type}`);
  }
};
