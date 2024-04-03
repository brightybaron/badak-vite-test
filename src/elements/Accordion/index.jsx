import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const [className, setClassName] = useState("");
  const [className2, setClassName2] = useState("");
  const location = useLocation();
  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath.includes("/faq")) {
      setClassName("bg-gray-200 border-b border-gray-400");
      setClassName2("bg-gray-100");
    }
    if (!currentPath.includes("/faq")) {
      setClassName("border-b border-gray-400");
      setClassName2("");
    }
  }, [location]);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <div
            className={`rounded-lg py-2 px-4 ${className}`}
            onClick={() => handleClick(index)}
          >
            <div className="flex justify-between items-center cursor-pointer ">
              <span>{item.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${index === activeIndex ? "transform rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ${className2} ${
              index === activeIndex ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="px-4 py-2">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default Accordion;
