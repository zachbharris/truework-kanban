import React from "react";
import styled from "styled-components";

const Layout = props => {
  const { children, className } = props;
  return <section className={className} children={children} />;
};

const StyledLayout = styled(Layout)`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 353px;
  grid-gap: 1rem;
  overflow-x: auto;
`;

export default StyledLayout;
