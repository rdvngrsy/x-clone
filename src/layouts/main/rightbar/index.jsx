import React from "react";
import Search from "./search";
import Premium from "./premium";
import Topics from "./topics";
const RightBar = () => {
  return <aside className="w-[350px] ">
    <Search />
    <Premium />
    <Topics />
  </aside>;
};

export default RightBar;
