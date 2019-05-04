import React from "react";
import styled from "styled-components";

import { info, infoSmooth } from "theme/colors";

const Label = ({ children, className, content }) => {
  return (
    <span className={className + " label"} children={children || content} />
  );
};

const StyledLabel = styled(Label)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${infoSmooth};
  border: 1px solid ${info};
  color: ${info};

  padding: 0.25rem;
  min-height: 1rem;
  min-width: 1rem;
  border-radius: 1rem;
  font-size: 0.875rem !important;
  line-height: 1px;
`;

export default StyledLabel;
