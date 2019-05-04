import React, { useState } from "react";
import styled from "styled-components";
import { useActions } from "easy-peasy";

import Item from "../Item";

import Header from "./Header";
import AddItem from "./AddItem";

import { gray } from "theme/colors";

const Column = ({ className, id, items, title }) => {
  const [state, set] = useState({
    addItem: false
  });

  const toggleAddItem = () => set({ ...state, addItem: !state.addItem });

  const itemCount = items.length;
  return (
    <section className={className}>
      <Header
        toggle={toggleAddItem}
        count={itemCount}
        title={title}
        columnId={id}
      />
      {state.addItem ? <AddItem columnId={id} toggle={toggleAddItem} /> : null}
      <ItemsWrapper>
        {items.map((item, index) => {
          return <Item {...item} columnId={id} key={index} />;
        })}
      </ItemsWrapper>
    </section>
  );
};

const StyledColumn = styled(Column)`
  background-color: ${gray[20]};
  border-radius: 4px;
  border: 1px solid ${gray[30]};
  padding: 0.5rem 0;
  overflow: hidden;
`;

const ItemsWrapper = styled.div`
  display: block;
  overflow: auto;
  height: 100%;
  padding: 0 0.5rem;
`;

export default StyledColumn;
