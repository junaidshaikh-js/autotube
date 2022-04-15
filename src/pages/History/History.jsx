import { useEffect, useState } from "react";

import {
  Loader,
  SecondaryBtnOutline,
  HorizontalVideoCard,
} from "../../component";
import { getHistory, deleteAllHistory } from "../../utils/server-requests";
import { useAuth, useToast, useVideo } from "../../context";
import { Link } from "react-router-dom";

export const History = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    state: { token },
  } = useAuth();

  const {
    dispatch,
    state: { history },
  } = useVideo();

  const { setToastMessage } = useToast();

  useEffect(() => {
    getHistory(token, dispatch, setIsLoading);
  }, []);

  return (
    <div className="wrapper">
      {isLoading ? (
        <Loader />
      ) : history.length == 0 ? (
        <main className="empty-page txt-center flex flex-center flex-column">
          <p>History page is empty.</p>
          <Link to="/explore"> Watch some video now.</Link>
        </main>
      ) : (
        <main className="history-main mt-2">
          <header className="flex justify-between align-center">
            <h1 className="h2 section-heading">History</h1>
            <SecondaryBtnOutline
              onClick={() => deleteAllHistory(token, dispatch, setToastMessage)}
            >
              Clear History
            </SecondaryBtnOutline>
          </header>

          <section className="mt-2">
            {history.map((video) => {
              return <HorizontalVideoCard video={video} key={video.videoId} />;
            })}
          </section>
        </main>
      )}
    </div>
  );
};
