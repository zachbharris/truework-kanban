import React, { useState } from "react";
import styled from "styled-components";
import { useActions } from "easy-peasy";

const AddItem = ({ className, columnId, toggle }) => {
  const [text, set] = useState("");
  const addItem = useActions(actions => actions.kanban.addItem);
  return (
    <div className={className}>
      <textarea value={text} onChange={e => set(e.target.value)} />
      <button onClick={() => addItem({ columnId, content: text })}>Add</button>
      <button onClick={toggle}>Cancel</button>
    </div>
  );
};

const StyledAddItem = styled(AddItem)``;

export default AddItem;
