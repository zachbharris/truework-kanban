import React from "react";
import Column from "./Column";

const Kanban = ({ columns }) => {
  return columns.map((col, index) => {
    return <Column items={col.items} title={col.title} key={index} />;
  });
};

export default Kanban;
