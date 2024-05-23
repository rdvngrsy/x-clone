import classNames from "classnames";
import { PropTypes } from "prop-types";
import React, { createElement } from "react";

const Button = ({ as, size, variant, children, className, ...props}) => {
  return createElement(
    as,
    {
      type: "button",
      className: classNames(
        " rounded-full flex items-center justify-center font-bold  transition-colors",
        {
          "px-4 h-8 min-w-[86px] font-bold leading-4 text-[14px]":
            size == "small",
          "px-4 h-9 min-w-[36px] font-bold leading-5 text-[15px]":
            size == "normal",
          "px-4 h-[52px] w-full text-[17px]": size == "large",
          "bg-[#1d9bf0] hover:bg-[#1a8cd8]": variant == "primary",
          "bg-[#eff3f4] hover:bg-[#d8dbdc] text-black": variant == "white",
          "border border-[#536471] hover:border-[#67070f] hover:bg-[#f4212e1a] hover:text-[#f4212e]": variant == "white-outline",
          [className]: true,
        }
      ),
      ...props,
    },
    children
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["small", "normal", "large"]),
  variant: PropTypes.oneOf(["primary", "white", "white-outline"]),
  as: PropTypes.any,
  props: PropTypes.object,
  className: PropTypes.string,
};
Button.defaultProps = { as: "button", size: "normal", variant: "primary" };
export default Button;
