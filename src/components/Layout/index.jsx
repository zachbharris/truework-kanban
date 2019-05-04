import React from "react";
import styled from "styled-components";

const Layout = props => {
  const { children, className } = props;
  return <div className={className} children={children} />;
};

const StyledLayout = styled(Layout)``;

export default StyledLayout;
