import React from "react";
import { topics } from "../../../../utils/consts"
import Topic from "./topic";

const Topics = () => {
  return (
    <section className="bg-black border border-[#2f3336] rounded-2xl">
      <h6 className="flex justify-between items-center py-3 px-4 text-[20px] font-extrabold leading-6 text-[#e7e9ea]">
        İlgini çekebilecek gündemler
      </h6>
      <div className="grid">
        {topics.map((topic, index) => (
          <Topic key={index} item={topic} />
        ))}
      </div>
    </section>
  );
};

export default Topics;
