// NavTab.jsx
import { useState } from "react";
import PropTypes from "prop-types";

function NavTab({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="flex flex-wrap justify-evenly gap-y-2">
        {tabs.map((tab, index) => (
          <button key={index} className={`py-1 px-3 mr-2 rounded ${activeTab === index ? "bg-teal-700 text-white" : "bg-gray-200 text-gray-700"}`} onClick={() => handleClick(index)}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4 border-t-2 border-black">{tabs[activeTab].content}</div>
    </>
  );
}

NavTab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default NavTab;
