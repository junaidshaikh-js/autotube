import { Link } from "react-router-dom";

import Logo from "../../assets/AutoTube.svg";

export const Header = () => {
  return (
    <div className="header-wrapper border-bottom">
      <header className="flex align-center justify-between mx-sm">
        <figure className="logo">
          <Link to="/">
            <img src={Logo} alt="AutoTube" height="80" width="80" />
          </Link>
        </figure>
        <div>
          <Link to="/signup" className="btn btn-auto-primary mr-sm">
            Sign up now
          </Link>

          <Link to="/login" className="btn btn-auto-secondary">
            login
          </Link>
        </div>
      </header>
    </div>
  );
};
