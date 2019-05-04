import React from "react";
import styled from "styled-components";

const Layout = props => {
  const { children, className } = props;
  return <div className={className} children={children} />;
};

const StyledLayout = styled(Layout)`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: auto 1fr;
  height: 100%;
`;

export default StyledLayout;
