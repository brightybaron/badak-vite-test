import Typed from "typed.js";
import { useEffect } from "react";

const HeroHome = () => {
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
    <div className="bg-hero-home relative h-screen bg-cover bg-no-repeat bg-center">
      <div className="relative left-[10%] top-[30%] w-fit text-stone-200">
        <p className="mb-0">Welcome to</p>
        <p className="font-bold text-2xl mb-3">Badak Gunung</p>
        <p>
          <span className="typed" data-typed-items="Easy Way to Booking Your Trip"></span>
        </p>
      </div>
    </div>
  );
};

export default HeroHome;
