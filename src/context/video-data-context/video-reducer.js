import { constants } from "./utils/constants";

const { setVideos, setCategories, filter } = constants;

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
    case filter:
      return {
        ...state,
        categoryFilter: payload,
      };
    default:
      throw new Error(`Unhandled action type ${type}`);
  }
};
