import React, { useState } from "react";
import styled from "styled-components";
import { useActions } from "easy-peasy";

import { success, successSmooth, gray, white } from "theme/colors";

const AddItem = ({ className, columnId, toggle }) => {
  const [text, set] = useState("");
  const addItem = useActions(actions => actions.kanban.addItem);
  const handleAddItem = async () => {
    await addItem({ columnId, content: text });
    set("");
  };
  return (
    <div className={className}>
      <textarea value={text} onChange={e => set(e.target.value)} />
      <Button disabled={text.length === 0} onClick={handleAddItem} success>
        Add Item
      </Button>
      <Button onClick={toggle}>Cancel</Button>
    </div>
  );
};

const StyledAddItem = styled(AddItem)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
  margin: 0.5rem;
  margin-bottom: 1rem;

  textarea {
    grid-column: 1 / span 2;
    width: inherit;
    min-height: 3rem;
    resize: vertical;
  }
`;

const Button = styled.button`
  border: 1px solid
    ${props => {
      if (props.success) return success;
      return gray[40];
    }};
  border-radius: 4px;
  color: ${props => {
    if (props.success) return success;
    return gray[90];
  }};
  cursor: pointer;
  padding: 0.5rem;
  background-color: ${props => {
    if (props.success) return successSmooth;
    return gray[30];
  }};
  font-weight: 600;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default StyledAddItem;
