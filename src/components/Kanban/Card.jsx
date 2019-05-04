import React from "react";
import styled from "styled-components";
import { animated, config, useSpring } from "react-spring";

import { gray, white } from "theme/colors";
import { dark2dp, dark4dp } from "theme/shadows";

const Card = ({ children, className }) => {
  const [springProps, setSpringProps] = useSpring(() => ({
    boxShadow: dark2dp,
    config: config.stiff
  }));

  return (
    <animated.article
      onMouseEnter={() => setSpringProps({ boxShadow: dark4dp })}
      onMouseLeave={() => setSpringProps({ boxShadow: dark2dp })}
      style={{ boxShadow: springProps.boxShadow }}
      className={className}
      children={children}
    />
  );
};

const StyledCard = styled(Card)`
  background-color: ${white};
  border-radius: 0.25rem;
  border: 1px solid ${gray[30]};
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export default StyledCard;
