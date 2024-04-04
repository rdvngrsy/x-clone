import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenuItems } from "../../../../utils/consts";
import More from "./more";
import New from "./new";
import { useAccount } from "../../../../store/auth/hooks";

const Menu = () => {
  const account = useAccount()

  return (
    <nav className="" key={account}>
      {mainMenuItems.map((menuItem, index) => (
        <div key={index}  className="py-[3.3px]">
          <NavLink to={typeof menuItem.path == 'function' ? menuItem.path() : menuItem.path} className="group ">
            {({ isActive }) => (
              <div
                className={classNames(
                  "p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] ",
                  {
                    "font-bold": isActive,
                  }
                )}
              >
                <div className="w-[26.25px] h-[26.25px] relative">
                  {menuItem.notifications && (
                    <span className="w-[18px] h-[18px] rounded-full bg-[#1b9bf0] absolute -top-1.5 -right-1 text-[11px] flex items-center justify-center">
                      {menuItem?.notifications}
                    </span>
                  )}
                  {!isActive && menuItem.icon.passive}
                  {isActive && menuItem.icon.active}
                </div>
                <div className="pr-4 text-xl text-[#e7e9ea]">
                  {menuItem.title}
                </div>
              </div>
            )}
          </NavLink>
        </div>
      ))}
      <More/>
      <New/>
    </nav>
  );
};

export default Menu;
