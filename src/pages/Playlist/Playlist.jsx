import { useState } from "react";

import { PrimaryBtn, Modal, ReactPortal, PlaylistCard } from "../../component";

import { useVideo } from "../../context";

export const Playlist = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    state: { playlists },
  } = useVideo();

  return (
    <div className="wrapper">
      <main className="page-main">
        <header>
          <h1 className="section-heading">Playlists</h1>
        </header>

        <section className="my-2">
          <PrimaryBtn onClick={() => setShowModal(true)}>
            Create Playlist
          </PrimaryBtn>

          <div className="playlist-container mt-2">
            {playlists.map((playlist) => (
              <PlaylistCard playlist={playlist} key={playlist._id} />
            ))}
          </div>
        </section>

        {showModal && (
          <ReactPortal>
            <Modal closeModal={() => setShowModal(false)} />
          </ReactPortal>
        )}
      </main>
    </div>
  );
};
