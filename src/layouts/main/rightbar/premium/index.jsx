import React from "react";
import Button from "../../../../components/button";

const Premium = () => {
  return <section className="mb-4 bg-black border border-[#2f3336] rounded-2xl">
    <div className="flex flex-col items-start py-3 px-4 gap-[10px]">
        <h2 className="text-[#e7e9ea] text-[20px] font-extrabold leading-6">Premium'a Abone Ol</h2>
        <p className="text-[#e7e9ea] text-[15px] font-normal  leading-5">Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.</p>
        <Button size={"normal"} children={"Abone ol"} />
    </div>
  </section>;
};

export default Premium;
