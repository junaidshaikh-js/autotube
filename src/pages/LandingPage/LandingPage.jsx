import { Link } from "react-router-dom";

import BannerBg from "../../assets/banner-bg.jpg";
import { SecondaryBtnOutline, VideoCard } from "../../component";
import { useVideo } from "../../context";

export const LandingPage = () => {
  const {
    state: { videos },
  } = useVideo();

  const trendingVideos = [...videos].splice(1, 4);

  return (
    <div className="wrapper">
      <main className="landing-page-main">
        <section className="banner-section">
          <figure className="banner">
            <img src={BannerBg} alt="" height="370" width="1570" />
          </figure>
          <div className="banner-section__heading txt-center w-100">
            <h1>Welcome to AutoTube</h1>
            <p>Explore the top videos in the automobile world.</p>
            <Link to="/explore">
              <SecondaryBtnOutline cnames="mt-1">
                Explore Now
              </SecondaryBtnOutline>
            </Link>
          </div>
        </section>

        <section className="m-2">
          <h2 className="h3 section-heading mt-2">Trending Videos</h2>
          <div className="video-container mt-2">
            {trendingVideos.map((video) => {
              return <VideoCard video={video} key={video._id} />;
            })}
          </div>
        </section>
      </main>
    </div>
  );
};
