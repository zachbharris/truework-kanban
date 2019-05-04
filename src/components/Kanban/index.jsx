import React from "react";
import styled from "styled-components";
import Column from "./Column";

const Kanban = ({ className, columns }) => {
  return (
    <section className={className}>
      {columns.map((col, index) => {
        return <Column items={col.items} title={col.title} key={index} />;
      })}
    </section>
  );
};

const StyledKanban = styled(Kanban)`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 353px;
  grid-gap: 1rem;
  overflow-x: auto;

  padding: 1rem;
`;

export default StyledKanban;
