import { FaHome, FaClock, FaHistory } from "react-icons/fa";
import { MdExplore, MdFeaturedPlayList } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const getActiveStyles = ({ isActive }) => {
  return {
    background: isActive ? "hsl(1deg, 91%, 38%)" : "",
  };
};

export const Navigation = () => {
  return (
    <aside className="app-navigation w-100" aria-label="App Navigation">
      <ul className="app-navigation__links flex  py-1 mx-sm">
        <li>
          <NavLink
            style={getActiveStyles}
            to="/"
            className="app-navigation--link"
          >
            <FaHome title="Home" />
            <span className="hide-small-900">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="app-navigation--link"
            to="/explore"
            style={getActiveStyles}
          >
            <MdExplore title="Explore" />
            <span className="hide-small-900">Explore</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="app-navigation--link"
            to="/playlist"
            style={getActiveStyles}
          >
            <MdFeaturedPlayList title="Playlist" />
            <span className="hide-small-900">Playlist</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="app-navigation--link"
            to="/watch-later"
            style={getActiveStyles}
          >
            <FaClock title="Watch Later" />
            <span className="hide-small-900">Watch Later</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="app-navigation--link"
            to="/history"
            style={getActiveStyles}
          >
            <FaHistory title="History" />
            <span className="hide-small-900">History</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="app-navigation--link"
            to="/liked-videos"
            style={getActiveStyles}
          >
            <AiFillLike title="Liked Videos" />
            <span className="hide-small-900">Liked Videos</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
