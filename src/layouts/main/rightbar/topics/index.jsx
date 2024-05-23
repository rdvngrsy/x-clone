import React from "react";
import { topics } from "../../../../utils/consts";
import Topic from "./topic";
import { Link } from "react-router-dom";
import SidebarSection from "../../../../components/sidebar-section";

const Topics = () => {
  return (
    <SidebarSection title="İlgini çekebilecek gündemler" more="/trends">
      {topics.map((topic, index) => (
        <Topic key={index} item={topic} />
      ))}
    </SidebarSection>
  
  );
};

export default Topics;
