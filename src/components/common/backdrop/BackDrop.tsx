import React from "react";
import styled from "styled-components";

const BackDrop = () => {
  return (
    <StyledBackDrop>
      <div className="backdrop--container"></div>
    </StyledBackDrop>
  );
};

const StyledBackDrop = styled.span`
  z-index: 1400;
  position: relative;
  .backdrop--container {
    background: rgb(205, 209, 206);
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
    opacity: 0.8;
    z-index: 1399;
    backdrop-filter: blur(3px);
  }
`;

export default BackDrop;
