import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MyButton from "../../fragments/MyButton";

const Card = ({ children }) => {
  return <div className="w-full max-w-xl rounded overflow-hidden shadow-lg p-2">{children}</div>;
};

const Head = ({ gambar, link }) => {
  return (
    <>
      <Link to={link}>
        <img className="w-full object-cover object-center h-[12rem] sm:h-[14rem]  hover:scale-110 hover:transition-all hover:duration-200" src={gambar} alt="bromo" />
      </Link>
    </>
  );
};

const Body = ({ judul, harga, link }) => {
  return (
    <>
      <div className="px-6 py-2">
        <div className="relative z-10 font-semibold text-base bg-teal-800 text-white px-2 py-0.5 mb-1">{harga}</div>
        <Link to={link} className="text-gray-700 text-xl font-semibold">
          {judul}
        </Link>
      </div>
    </>
  );
};

const Footer = ({ durasi, link }) => {
  return (
    <>
      <div className="flex justify-between px-4 py-2">
        <div className="flex items-center ">
          <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-slate-500">
            <i className="bi bi-clock"></i>&nbsp;{durasi}&nbsp;day
          </div>
        </div>
        <MyButton url={link}>See more</MyButton>
      </div>
    </>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

Head.propTypes = {
  gambar: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

Body.propTypes = {
  judul: PropTypes.string.isRequired,
  harga: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

Footer.propTypes = {
  durasi: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

Card.Head = Head;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
