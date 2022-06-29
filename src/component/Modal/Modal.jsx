import { useState } from "react";
import { Link } from "react-router-dom";

import { FaRegTimesCircle } from "react-icons/fa";
import { MdPlaylistAdd, MdPlaylistAddCheck } from "react-icons/md";

import {
  addToPlaylist,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
} from "../../utils/server-requests";

import { PrimaryBtnOutline } from "../button/PrimaryBtnOutline/PrimaryBtnOutline";
import { HiddenLabel } from "./sub-component/HiddenLabel";

import { useAuth, useToast, useVideo } from "../../context";
import { isInList } from "../../utils/helper-functions";

export const Modal = ({ closeModal, from, currentVideo }) => {
  const formIntialState = {
    playlistName: "",
    playlistDescription: "",
  };
  const [formData, setFormData] = useState(formIntialState);

  const {
    state: { playlists },
    dispatch,
  } = useVideo();

  const {
    state: { token },
  } = useAuth();

  const { setToastMessage } = useToast();

  const handleFormChange = (e) => {
    const { name: key, value } = e.target;

    setFormData((f) => ({ ...f, [key]: value }));
  };

  const createPlaylist = (e) => {
    e.preventDefault();

    const playlist = {
      title: formData.playlistName,
      description: formData.playlistDescription,
    };

    addToPlaylist(dispatch, token, setToastMessage, playlist);

    setFormData(formIntialState);
  };

  return (
    <div className="modal-wrapper flex flex-center">
      <article className="modal-container txt-center p-2">
        {!!playlists.length && (
          <div className="playlists">
            <h2 className="h4">Playlists</h2>
            {playlists.map((_playlist) => {
              const isInPlaylist = isInList(
                _playlist.videos,
                currentVideo?.videoId
              );

              return from == "video-page" ? (
                <span
                  className={`playlist-row my-1 flex align-center ${
                    isInPlaylist ? "video-added" : null
                  }`}
                  onClick={() => {
                    isInPlaylist
                      ? removeVideoFromPlaylist(
                          dispatch,
                          token,
                          setToastMessage,
                          _playlist,
                          currentVideo,
                          playlists
                        )
                      : addVideoToPlaylist(
                          dispatch,
                          token,
                          setToastMessage,
                          _playlist,
                          currentVideo,
                          playlists
                        );
                  }}
                >
                  {isInPlaylist ? (
                    <MdPlaylistAddCheck className="mr-sm" fontSize="1.5rem" />
                  ) : (
                    <MdPlaylistAdd className="mr-sm" fontSize="1.5rem" />
                  )}
                  <span>{_playlist.title}</span>
                </span>
              ) : (
                <Link to={`/playlist/${_playlist._id}`}>
                  <span className="playlist-row my-1 flex align-center">
                    <span>{_playlist.title}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        )}

        <header>
          <h2 className="h4">Create Playlist</h2>
        </header>
        <form className="mt-2" onSubmit={createPlaylist}>
          <div className="my-1">
            <HiddenLabel labelFor="playlist-name" text="Playlist Name" />
            <input
              type="text"
              id="playlist-name"
              placeholder="Playlist Name"
              className="w-100 p-sm"
              value={formData.playlistName}
              onChange={handleFormChange}
              name="playlistName"
              required
            />
          </div>

          <div className="mb-2">
            <HiddenLabel
              labelFor="playlist-description"
              text="Playlist Description"
            />
            <input
              type="text"
              id="playlist-description"
              placeholder="Playlist Description"
              className="w-100 p-sm"
              value={formData.playlistDescription}
              onChange={handleFormChange}
              name="playlistDescription"
              maxLength="100"
              required
            />
          </div>

          <PrimaryBtnOutline type="submit">Create Playlist</PrimaryBtnOutline>

          <button
            type="button"
            className="btn modal-close-btn"
            onClick={() => closeModal()}
            title="Close"
          >
            <FaRegTimesCircle fontSize="1.5rem" />
          </button>
        </form>
      </article>
    </div>
  );
};
