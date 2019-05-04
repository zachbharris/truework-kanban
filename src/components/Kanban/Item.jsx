import React from "react";
import styled from "styled-components";

import Card from "./Card";

const Item = ({ content, ...rest }) => {
  return (
    <Card>
      <p>{content}</p>
    </Card>
  );
};

export default Item;
