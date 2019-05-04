import React from "react";
import styled from "styled-components";

import { white } from "theme/colors";

const Item = ({ content, ...rest }) => {
  return (
    <Card>
      <p>{content}</p>
    </Card>
  );
};

const Card = styled.article`
  background-color: ${white};
  display: block;
`;

export default Item;
