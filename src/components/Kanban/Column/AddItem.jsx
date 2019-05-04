import React from "react";
import styled from "styled-components";

const AddItem = ({ className, toggle }) => {
  return (
    <div className={className}>
      <textarea />
      <button>Add</button>
      <button onClick={toggle}>Cancel</button>
    </div>
  );
};

const StyledAddItem = styled(AddItem)``;

export default AddItem;
