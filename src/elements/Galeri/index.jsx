import PropTypes from "prop-types";
import { useState } from "react";
import FsLightbox from "fslightbox-react";

const Galeri = ({ judul, isiGaleri }) => {
  const [toggler, setToggler] = useState(false);
  const [togglerIndex, setTogglerIndex] = useState(0);

  const openLightbox = (index) => {
    setTogglerIndex(index);
    setToggler(!toggler);
  };

  return (
    <div className="flex flex-wrap mx-auto justify-between gap-y-4">
      {isiGaleri.map((item, index) => (
        <div className="grow-0 shrink-0 basis-auto text-center lg:w-1/3 w-1/2 px-3" key={index}>
          <div className="max-h-full aspect-[3/2] mx-auto">
            <img src={item} onClick={() => openLightbox(index)} className="block h-full aspect-[3/2] object-cover rounded mx-auto hover:scale-110 transition-all duration-200 hover:opacity-50 cursor-pointer" alt={judul} />
          </div>
        </div>
      ))}
      <FsLightbox toggler={toggler} sources={isiGaleri.map((item) => item)} sourceIndex={togglerIndex} onClose={() => setToggler(false)} />
    </div>
  );
};

Galeri.propTypes = {
  isiGaleri: PropTypes.array,
  judul: PropTypes.string,
  index: PropTypes.number,
};

export default Galeri;
