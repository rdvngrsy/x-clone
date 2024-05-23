import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SidebarSection = ({ title, children, more }) => {
  return (
    <section className="bg-black border overflow-hidden border-[#2f3336] rounded-2xl mb-4">
      <h6 className="flex justify-between items-center py-3 px-4 text-[20px] font-extrabold leading-6 text-[#e7e9ea]">
        {title}
      </h6>
      <div className="grid">
        {children}

        <Link
          to={more}
          className="h-[52px] p-4 text-left hover:bg-[#ffffff08] transition-colors text-[#1d9bf0] leading-5 text-[15px] font-normal"
        >
          Daha fazla göster
        </Link>
      </div>
    </section>
  );
};

SidebarSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  more: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

SidebarSection.defaultProps = {
  more: false,
};

export default SidebarSection;
