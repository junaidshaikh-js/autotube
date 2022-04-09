import { Link } from "react-router-dom";
import { FaChevronCircleRight } from "react-icons/fa";

export const BottomLink = ({ to, text }) => {
  return (
    <div className="txt-center mt-1 py-1 border-top-black">
      <Link to={to} className="flex align-center justify-center">
        {text} <FaChevronCircleRight className="ml-sm" />
      </Link>
    </div>
  );
};
