import React from "react";
import styled from "styled-components";

import Item from "./Item";
import { gray } from "theme/colors";
import { Label } from "components";

const Column = ({ className, items, title }) => {
  const itemCount = items.length;
  return (
    <section className={className}>
      <ColumnHeader count={itemCount} title={title} />
      <ItemsWrapper>
        {items.map((item, index) => {
          return <Item {...item} key={index} />;
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
  display: grid;
  grid-gap: 0.5rem;
  overflow: auto;
  height: 100%;
  padding: 0 0.5rem;
`;

export default StyledColumn;

const ColumnHeader = ({ count, title }) => {
  return (
    <StyledHeader>
      <Label content={count} />
      <h1 className="label">{title}</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: flex-start;
  grid-gap: 0.5rem;
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;
`;
