import React from "react";

const SidePanelSection = (props) => {
  return (
    <div className="sideBar_Section">
      <div className="sideBar_Section__title">
        <span>{props.title}</span>
      </div>

      {props.itemsList.map((item, index) => {
        if (item.Status === 1) {
          return (
            <div className="sideBar_Section__project" key={index}>
              <span>{item.Name}</span>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default SidePanelSection;
