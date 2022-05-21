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
  SingleVideoPage,
  SinglePlaylist,
} from "../pages";

import { RequireAuth } from "../component";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/explore" element={<VideoListing />} />
      <Route path="/watch/:id" element={<SingleVideoPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/playlist"
        element={
          <RequireAuth>
            <Playlist />
          </RequireAuth>
        }
      />
      <Route
        path="/playlist/:playlistId"
        element={
          <RequireAuth>
            <SinglePlaylist />
          </RequireAuth>
        }
      />
      <Route
        path="/watch-later"
        element={
          <RequireAuth>
            <WatchLater />
          </RequireAuth>
        }
      />
      <Route
        path="/history"
        element={
          <RequireAuth>
            <History />
          </RequireAuth>
        }
      />
      <Route
        path="/liked-videos"
        element={
          <RequireAuth>
            <LikedVideos />
          </RequireAuth>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
