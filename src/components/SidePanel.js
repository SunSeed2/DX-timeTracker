import React from "react";
import SidePanelSection from "./SidePanelSection";
import projectList from "../data/DB/projects";

const SidePanel = () => {
  return (
    <aside className="sideBar">
      <SidePanelSection title="Projects" itemsList={projectList} />
    </aside>
  );
};

export default SidePanel;
