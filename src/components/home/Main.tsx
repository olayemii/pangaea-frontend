import React, { FC } from "react";
import styled from "styled-components";
import FilterSection from "./FilterSection";
import ProductList from "./ProductList";
const Main: FC<{}> = () => {
  return (
    <StyledMain>
      <div className="main--wrapper">
        <FilterSection />
        <ProductList />
      </div>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  flex-direction: column;
  display: flex;
  min-height: 100vh;
  padding-left: 0rem;
  padding-right: 0rem;
  margin-left: 0rem;
  margin-right: 0rem;
  padding-top: 0rem;

  .main--wrapper {
    flex-grow: 1;
    flex-shrink: 0;

    & > *:first-child {
      padding-top: 64px;
    }
  }
`;

export default Main;
