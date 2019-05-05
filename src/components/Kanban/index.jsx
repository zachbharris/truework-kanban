import React from "react";
import styled from "styled-components";
import { useActions } from "easy-peasy";
import Column from "./Column";

import { gray } from "theme/colors";

const Kanban = ({ className, columns }) => {
  const addCol = useActions(actions => actions.kanban.addColumn);
  const handleColumnAddition = () => {
    const prompt = window.prompt("Enter Column Name", "New Column");
    if (prompt) return addCol(prompt);
    return false;
  };
  return (
    <section className={className}>
      {columns.map((col, index) => {
        return <Column {...col} key={index} />;
      })}
      <AddColumn onClick={handleColumnAddition}>
        <i className="far fa-plus" /> Add Column
      </AddColumn>
    </section>
  );
};

const StyledKanban = styled(Kanban)`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 353px;
  grid-gap: 1rem;

  padding: 1rem;
`;

const AddColumn = styled.button`
  background-color: transparent;
  border: 1px dashed ${gray[30]};
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  align-self: flex-start;
  padding: 3rem 0.5rem;
`;

export default StyledKanban;
