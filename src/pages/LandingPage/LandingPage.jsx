import { Link } from "react-router-dom";

import BannerBg from "../../assets/banner-bg.jpg";
import { SecondaryBtnOutline, VideoCard } from "../../component";

// will be replaced with actual data from backend later on
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

function getRandomViews() {
  return `${Math.floor(Math.random() * 12)}K`;
}

const testVideoData = {
  _id: 1,
  title: "$50 Million Hypercar Gathering In The Netherlands!",
  thumbnail: "https://img.youtube.com/vi/hQYRDNl-lGI/mqdefault.jpg",
  channelName: "Gumbal",
  channelImage:
    "https://res.cloudinary.com/junaidshaikh/image/upload/v1649689404/unnamed_i3taq2.jpg",
  views: getRandomViews(),
  createdAt: randomDate(new Date(2010, 1, 1), new Date()),
};

export const LandingPage = () => {
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
            <VideoCard video={testVideoData} />
            <VideoCard video={testVideoData} />
            <VideoCard video={testVideoData} />
            <VideoCard video={testVideoData} />
          </div>
        </section>
      </main>
    </div>
  );
};
