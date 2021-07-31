import React, { FC } from "react";
import styled from "styled-components";
import useConfig from "../../../hooks/useConfig";
import DrawerBody from "./DrawerBody";
import DrawerFooter from "./DrawerFooter";
import { ReactComponent as CartIcon } from "../../../assets/svg/cart.svg";
import CurrencySelector from "./CurrencySelector";
import { DrawerProps } from "../../../utils/interfaces";

const Drawer: FC<DrawerProps> = (props) => {
  const { isOpen } = props;
  const { doToggleDrawer } = useConfig();
  return (
    <StyledDrawer>
      <div className="overlay--container"></div>
      <form className={`right--cart translate--cart ${isOpen ? "open" : ""}`}>
        <div className="in--cart--overlay"></div>
        <div className="cart--top">
          <div style={{ justifyContent: "flex-start" }}>
            <div className="cart--wrapper" onClick={doToggleDrawer}>
              <CartIcon />
            </div>
          </div>
          <div>
            <h5 className="cart--title">YOUR CART</h5>
          </div>
          <div></div>
        </div>
        <CurrencySelector />
        <div className="react--cart--body">
          <div className="cart--item--list">
            <DrawerBody />
          </div>
        </div>
        <DrawerFooter />
      </form>
    </StyledDrawer>
  );
};
const StyledDrawer = styled.div`
  .overlay--container {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #6e7b70;
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s ease-in-out;
  }

  .right--cart {
    position: fixed;
    top: 0;
    background-color: #f2f2ef;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-x: auto;
    max-width: 550px;
    width: 100%;
    z-index: 1500;
    transition: transform 0.4s cubic-bezier(0.28, 0.47, 0.29, 0.86),
      opacity 0.4s ease-in-out 0.1s;
    opacity: 0;
    left: auto;
    right: 0;
    transform: translateX(100%);
    .cart--wrapper {
      border-radius: 50%;
      border: 1px solid rgb(198, 204, 199);
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-left: 20px;
    }
    .in--cart--overlay {
      display: none;
    }

    .cart--top {
      margin-bottom: 10px;
    }
    &.open {
      transform: translateX(0);
      opacity: 1;

      .in--cart--overlay {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #f2f2ef;
        opacity: 0.6;
        z-index: 100;
        pointer-events: none;
        transition: all 0.4s ease-in-out;
      }

      .cart--top {
        display: flex;
        flex-direction: row;
        margin-bottom: 50px;
        & > div {
          display: flex;
          flex: 1;
          width: 33.3%;
          justify-content: center;
          align-items: center;
          padding-top: 20px;
        }

        h5.cart--title {
          color: #696969;
          font-weight: 400;
          letter-spacing: 1px;
          font-style: normal;
          font-size: 10px;
          text-align: center;
          margin-bottom: 0;
          line-height: 1.2;
        }
      }

      .react--cart--body {
        padding-left: 20px;
        padding-right: 20px;
        overflow-y: auto;
        flex: 1;

        .cart--item--list {
          margin-top: 10px;
        }
      }
    }
  }
`;
export default Drawer;
