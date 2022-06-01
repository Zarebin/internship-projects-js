import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faArrowLeft,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex-row-justify-between">
      <Link to="/imageLabelVerification">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>

      <a className="margin-icon">
        <FontAwesomeIcon icon={faEllipsisV} />
      </a>
    </div>
  );
};

export default Header;
