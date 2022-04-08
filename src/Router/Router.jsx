import { Routes, Route } from "react-router-dom";

import {
  PageNotFound,
  LandingPage,
  VideoListing,
  Playlist,
  WatchLater,
  History,
  LikedVideos,
  Login,
  Signup,
} from "../pages";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/explore" element={<VideoListing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/watch-later" element={<WatchLater />} />
      <Route path="/history" element={<History />} />
      <Route path="/liked-videos" element={<LikedVideos />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
