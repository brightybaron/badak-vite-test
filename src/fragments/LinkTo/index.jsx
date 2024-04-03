import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ButtonLink = (props) => {
  const { href, children } = props;
  return (
    <Link
      to={href}
      className="text-gray-300  hover:text-white after:content-[''] after:block after:border-b-2 after:transition-all after:duration-300 after:scale-x-0 after:origin-center hover:after:scale-x-100 block px-3 py-2 rounded-md text-base font-medium uppercase"
    >
      {children}
    </Link>
  );
};

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonLink;
