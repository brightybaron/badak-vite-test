import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const MyButton = (props) => {
  const { children, url, className } = props;
  return (
    <Link to={url} className={`flex bg-teal-900 text-white hover:bg-teal-700 hover:scale-110 hover:transform-all hover:duration-300 px-2 pb-1 rounded-lg items-center ${className || ""}`}>
      {children}
    </Link>
  );
};

MyButton.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default MyButton;
