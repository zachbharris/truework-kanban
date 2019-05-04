import React from "react";
import styled from "styled-components";
import Item from "./Item";

import { gray } from "theme/colors";

const Column = ({ className, items, title }) => {
  return (
    <section className={className}>
      <h3>{title}</h3>
      {items.map((item, index) => {
        return <Item {...item} key={index} />;
      })}
    </section>
  );
};

const StyledColumn = styled(Column)`
  background-color: ${gray[30]};
  padding: 0.5rem;
`;

export default StyledColumn;
