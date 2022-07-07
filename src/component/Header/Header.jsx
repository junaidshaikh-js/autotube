import { Link, useNavigate } from "react-router-dom";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

import Logo from "../../assets/AutoTube.svg";
import { useAuth, useToast, useVideo } from "../../context";
import { useState } from "react";

export const Header = () => {
  const [isHovering, setIsHovering] = useState(false);

  const {
    state: { token, userName },
    dispatch: authDispatch,
    handleLogout,
  } = useAuth();
  const { setToastMessage } = useToast();
  const { dispatch: videoDispatch } = useVideo();
  const navigate = useNavigate();

  const toggleDropdown = () => setIsHovering((h) => !h);
  const openDropdown = () => setIsHovering(true);
  const closeDropdown = () => setIsHovering(false);

  return (
    <div className="header-wrapper border-bottom">
      <header className="flex align-center justify-between mx-sm">
        <figure className="logo">
          <Link to="/">
            <img src={Logo} alt="AutoTube" height="80" width="80" />
          </Link>
        </figure>
        {token ? (
          <div
            className="mr-2 logout-wrapper"
            onClick={toggleDropdown}
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <div className="flex align-center ">
              <span>{userName}</span>
              {isHovering ? <FaAngleDown /> : <FaAngleRight />}
            </div>

            {isHovering && (
              <div className="logout-btn flex align-center justify-center">
                <button
                  className="btn"
                  onClick={() =>
                    handleLogout(
                      authDispatch,
                      navigate,
                      setToastMessage,
                      videoDispatch
                    )
                  }
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <Link to="/signup" className="btn btn-auto-primary mr-sm">
              Sign up now
            </Link>

            <Link to="/login" className="btn btn-auto-secondary">
              login
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};
