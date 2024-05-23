import React from "react";
import Search from "./search";
import Premium from "./premium";
import Topics from "./topics";
import WhoFollow from "./who-follow";
import Footer from "./footer";
const RightBar = () => {
  return <aside className="w-[350px] ">
    <Search />
    <Premium />
    <Topics />
    <WhoFollow/>
    <Footer/>
  </aside>;
};

export default RightBar;
