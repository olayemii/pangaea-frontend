import React, { FC } from "react";
import styled from "styled-components";
import { ReactComponent as SvgDropdown } from "../../../assets/svg/dropdown.svg";
import useCart from "../../../hooks/useCart";
import useConfig from "../../../hooks/useConfig";
const Header: FC<{}> = () => {
  const { cartItems } = useCart();
  const { doToggleDrawer } = useConfig();
  return (
    <StyledHeader>
      <div className="header--content">
        <div className="header--content--left">
          <button aria-label="Navigation Menu" className="hamburger--button">
            <p className="hamburger--button--line"></p>
            <p className="hamburger--button--line"></p>
            <p className="hamburger--button--line"></p>
          </button>
          <a className="header--image--link" href="/">
            <div className="header--image--wrapper">
              <img
                alt="logo"
                src="https://www.luminskin.com/_next/static/images/logo-20c2cb1d9d2bb6d2139d0e5cec3103bd.png"
                className="header--image--logo"
              />
            </div>
          </a>
          <a className="header--link--item" href="#header--item">
            Belanja
          </a>
          <a className="header--link--item" href="#header--item">
            About
          </a>
          <a className="header--link--item" href="#header--item">
            Support
          </a>
          <a className="header--link--item" href="#header--item">
            Blog
          </a>
        </div>
        <div className="header--content--right">
          <a className="account--link" href="#account">
            Account
          </a>
          <a
            dir="ltr"
            href="#cart"
            className="cart--link"
            onClick={(e) => {
              doToggleDrawer();
              e.preventDefault();
            }}
          >
            <img
              src="data:image/png;base64,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"
              className="cart--image"
              alt="cart"
            />
            <p className="cart--item--counter">{cartItems.length}</p>
          </a>
          <div className="language--select--wrapper">
            <select className="language--select">
              <option value="ar">AR</option>
              <option value="fr">FR</option>
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="de">DE</option>
              <option value="he">HE</option>
              <option value="id">ID</option>
              <option value="zh-TW">ZH-TW</option>
              <option value="pt">PT</option>
              <option value="th">TH</option>
              <option value="da">DA</option>
              <option value="ja">JA</option>
              <option value="ko">KO</option>
            </select>
            <div className="language--select--dropdown">
              <SvgDropdown />
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  top: 0rem;
  width: 100%;
  position: absolute;
  background-color: initial;
  z-index: 1;
  box-shadow: 0 2px 3px -3px grey;

  .header--content {
    margin-left: 0rem;
    margin-right: 0rem;
    padding-top: 0.5rem;
    color: #000;
    border-bottom: 0;
    border-color: #292929;
    display: flex;
    height: 64px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    @media (min-width: 768px) {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }

    @media (min-width: 992px) {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }

    &--left {
      align-items: center;
      justify-content: center;
      display: flex;

      .hamburger--button {
        background-color: transparent;
        border: 0;
        width: 16px;
        margin-right: 15px;
        position: relative;
        bottom: 1px;
        cursor: pointer;
        padding: 0rem;
        @media screen and (min-width: 768px) {
          display: block;
        }
        @media screen and (min-width: 992px) {
          display: none;
        }

        &--line {
          height: 1px;
          display: block;
          background-color: #2b2e2b;
          margin-bottom: 4px;
          font-weight: 400;
          @media screen and (min-width: 992px) {
            font-size: 1rem;
            line-height: 1.5;
          }
        }
      }

      .header--image--link {
        .header--image--wrapper {
          align-items: center;
          display: none;
          margin-top: -5px;
          width: auto;
          height: 20px;
          margin-right: 0rem;
          @media screen and (min-width: 768px) {
            display: none;
            width: auto;
            height: 20px;
            margin-right: 0rem;
          }
          @media screen and (min-width: 992px) {
            display: inline-block;
            width: 163px;
            height: 44px;
            margin-right: 4rem;
          }

          .header--image--logo {
            height: 100%;
            object-fit: contain;
          }
        }
      }

      .header--link--item {
        font-size: 15px;
        line-height: 17px;
        margin-right: 1.25rem;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
        padding-left: 1rem;
        padding-right: 1rem;
        transition: color 0.3s ease-in-out;
        display: none;
        @media screen and (min-width: 768px) {
          display: none;
        }
        @media screen and (min-width: 992px) {
          display: block;
        }
      }
    }

    &--right {
      align-items: center;
      display: flex;
      margin-top: -0.25rem;
      .account--link {
        font-size: 14px;
        line-height: 17px;
        margin-right: 0rem;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
        padding-left: 1rem;
        padding-right: 1rem;
        transition: color 0.3s ease-in-out;
      }

      .cart--link {
        align-items: center;
        display: flex;
        margin-left: 0rem;

        .cart--image {
          width: 25px;
          min-width: 25px;
          height: 21px;
        }
        .cart--item--counter {
          font-weight: 400;
          line-height: 1.7;
          font-size: 0.6875rem;
          font-size: 0.8125rem;
          margin-left: 1px;
          margin-bottom: 0.75rem;
          @media screen and (min-width: 992px) {
            line-height: 1.5;
          }
        }
      }

      .language--select--wrapper {
        height: fit-content;
        width: 84px;
        min-width: 84px;
        padding: 0rem;
        position: relative;
        top: initial;
        right: initial;
        left: initial;
        z-index: initial;
        margin-left: 1.5rem;

        .language--select {
          width: 100%;
          outline: 0;
          position: relative;
          appearance: none;
          transition: all 0.2s;
          padding-top: 2px;
          padding-bottom: 1px;
          line-height: normal;
          color: currentColor;
          height: 24px;
          font-size: 0.6875rem;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          border: 1px solid #cdd1ce;
          border-radius: 0;
          background: transparent;
          border-color: #acafad;
          padding-right: 2rem;

          @media screen and (min-width: 992px) {
            height: 32px;
            font-size: 0.8125rem;
          }
        }
        .language--select--dropdown {
          color: currentColor;
          font-size: 1.25rem;
          position: absolute;
          display: inline-flex;
          width: 1.5rem;
          height: 100%;
          align-items: center;
          justify-content: center;
          right: 0.5rem;
          pointer-events: none;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
`;
export default Header;
