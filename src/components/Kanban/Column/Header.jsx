import React from "react";
import styled from "styled-components";

import { Label } from "components";
import { useActions } from "easy-peasy";

const ColumnHeader = ({ className, columnId, count, title, toggle }) => {
  const remCol = useActions(actions => actions.kanban.removeColumn);
  const handleDelete = () => {
    const conf = window.confirm(`Are you sure you want to delete "${title}"?`);
    if (conf === true) return remCol(columnId);
    return false;
  };
  return (
    <header className={className}>
      <Label content={count} />
      <h1 className="label">{title}</h1>
      <button onClick={toggle}>
        <i className="far fa-plus" />
      </button>
      <button onClick={handleDelete}>
        <i className="far fa-trash" />
      </button>
    </header>
  );
};

const StyledHeader = styled(ColumnHeader)`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: flex-start;
  grid-gap: 0.5rem;
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;
`;

export default StyledHeader;
