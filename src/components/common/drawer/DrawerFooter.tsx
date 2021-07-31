import React from "react";
import styled from "styled-components";
import useCart from "../../../hooks/useCart";
import { formatCurrency } from "../../../utils/currencyHelper";

const DrawerFooter = () => {
  const { doGetCartTotal, currency } = useCart();
  return (
    <StyledDrawerFooter>
      <div className="cart--subtotal">
        <span>Subtotal</span>
        <div className="subtotal--price">
          {formatCurrency(currency, doGetCartTotal())}
        </div>
      </div>
      <div className="react--cart--buttons">
        <button
          data-track-id="[LEGACY CART] - OTP/Subscription Selector Clicked"
          type="button"
          className="subscription--btn"
        >
          <span className="d--none">REVERT TO ONE TIME PURCHASE</span>
          <span className="">MAKE THIS A SUBSCRIPTION (SAVE 20%)</span>
        </button>
        <button
          data-track-id="[LEGACY CART] - Proceed to Checkout Clicked"
          type="submit"
          className="checkout--btn"
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
    </StyledDrawerFooter>
  );
};
const StyledDrawerFooter = styled.div`
  border-top: 1px solid #d0d0d0;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1;
  padding: 0 20px 20px;

  .cart--subtotal {
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 15px;
    flex-direction: row;
    justify-content: space-between;
    border: 0 solid #6e7b70;
    border-top: none;

    .subtotal--price {
    }
  }
  .react--cart--buttons {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    .subscription--btn {
      font-size: 12px;
      font-weight: 400;
      font-style: normal;
      padding: 16px 20px;
      text-align: center;
      text-decoration: none;
      color: #2b2e2b;
      letter-spacing: 0.96px;
      border: 1px solid #2b2e2b;
      background-color: #fff;
    }

    .checkout--btn {
      color: #fff;
      letter-spacing: 2px;
      background-color: #4b5548;
      border: none;
      margin-top: 15px;
      font-size: 12px;
      font-weight: 400;
      font-style: normal;
      padding: 16px 20px;
      text-align: center;
      text-decoration: none;
    }
  }
`;
export default DrawerFooter;
