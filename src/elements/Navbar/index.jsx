import { useState, useEffect, useRef } from "react";
import ButtonLink from "../../fragments/LinkTo";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const offcanvasRef = useRef(null);

  // close offcanvas when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (offcanvasRef.current && !offcanvasRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // change navbar color when scrolling
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position > 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // change navbar color in different path
  const [className, setClassName] = useState("");
  const location = useLocation();
  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/paket" || currentPath.includes("/faq") || currentPath.includes("/about")) {
      setClassName("bg-teal-900");
    }
  }, [location]);

  const backgroundColor = scrollPosition ? "rgb(19 78 74)" : ""; // Change the scroll threshold and background color as needed
  const padTop = scrollPosition ? "" : "2rem";

  return (
    <nav className={`fixed top-0 z-[1030] w-full ${className} transition-all duration-300 `} style={{ backgroundColor, paddingTop: padTop }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex align-middle text-white font-bold text-xl">
              <img src="/img/logo2.png" alt="Logo" className="h-8 w-8 inline-block mx-2" />
              Badak Gunung
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <ButtonLink href={"/"}>Home</ButtonLink>
              <ButtonLink href={"/paket"}>Paket</ButtonLink>
              <ButtonLink href={"/about"}>About</ButtonLink>
              <ButtonLink href={"/faq"}>FAQ</ButtonLink>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} id="toggleButton" className="flex align-middle text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <div
              id="offcanvas"
              className={`transition-transform duration-300 ease-linear bg-gray-900 text-white fixed top-0 left-0 h-screen w-10/12 flex flex-col py-8 px-4 ${isMenuOpen ? "visible translate-x-0" : "-translate-x-[300px] invisible"}`}
              ref={offcanvasRef}
            >
              <Link to="/" className="flex align-middle text-white font-bold text-xl mb-4">
              <img src="/img/logo2.png" alt="Logo" className="h-8 w-8 inline-block mx-2" />
              Badak Gunung
            </Link>
              <ButtonLink href={"/"}>Home</ButtonLink>
              <ButtonLink href={"/paket"}>Paket</ButtonLink>
              <ButtonLink href={"/about"}>About</ButtonLink>
              <ButtonLink href={"/faq"}>FAQ</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
