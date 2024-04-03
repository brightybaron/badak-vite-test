import Typed from "typed.js";
import { useEffect } from "react";
import PropTypes from "prop-types";

const HeroPaket = ({ judul, heroPaket }) => {
  useEffect(() => {
    const typed = document.querySelector(".typed");
    let typedString = typed.getAttribute("data-typed-items");
    typedString = typedString.split(",");
    if (typed) {
      const options = {
        strings: typedString,
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      };
      const typed = new Typed(".typed", options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className="relative h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `linear-gradient(180deg, rgba(1, 1, 1, 0.5) 0%, rgba(0, 0, 0, 0.4) 25%, rgba(255, 255, 255, 0) 100%), url(${heroPaket})` }}>
      <div className="relative left-[10%] top-[30%] w-fit text-white ">
        <p className="font-bold text-2xl mb-2">
          <span className="typed" data-typed-items={judul}></span>
        </p>
        <p className="font-semibold text-lg mb-3">by Badak Gunung</p>
      </div>
    </div>
  );
};

HeroPaket.propTypes = {
  judul: PropTypes.string,
  heroPaket: PropTypes.string,
};

export default HeroPaket;
