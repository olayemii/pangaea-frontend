import React from "react";
import { createGlobalStyle } from "styled-components";
import BackDrop from "../../components/common/backdrop/BackDrop";
import Drawer from "../../components/common/drawer/Drawer";
import Header from "../../components/common/header/Header";
import Main from "../../components/home/Main";
import useConfig from "../../hooks/useConfig";
const GlobalStyle = createGlobalStyle<{ isOpen: boolean }>`
    body {
      overflow: ${({ isOpen }) => (isOpen ? "hidden" : "visible")};
    }`;

const Home = () => {
  const { isOpen } = useConfig();

  return (
    <>
      <Header />
      <Main />
      {isOpen && <BackDrop />}
      <Drawer isOpen={isOpen} />
      <GlobalStyle isOpen={isOpen} />
    </>
  );
};

export default Home;
