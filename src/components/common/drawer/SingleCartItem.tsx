import React, { FC } from "react";
import styled from "styled-components";
import useCart from "../../../hooks/useCart";
import { formatCurrency } from "../../../utils/currencyHelper";
import { ICartItem } from "../../../utils/interfaces";

const SingleCartItem: FC<{ item: ICartItem }> = (props) => {
  const {
    item: { product, quantity },
  } = props;
  const { currency, doDecrementQuantity, doRemoveItem, doIncrementQuantity } =
    useCart();
  return (
    <StyledSingleCartItem>
      <div className="cart--item">
        <div className="product--description">
          <span
            className="remove--product"
            onClick={() => doRemoveItem(product.id)}
            style={{ cursor: "pointer" }}
          >
            x
          </span>
          <h6>{product.title}</h6>
          <div></div>
          <div>
            <span>
              Two Month <span>supply shipped every two months</span>.
            </span>
            <span>Cancel or change frequency anytime</span>
          </div>
          <div>
            <span>One time purchase of</span> Two Month <span>supply</span>.
          </div>
          <div className="quantity">
            <div className="quantity--selector">
              <span
                className="counter--action decrement"
                onClick={() => doDecrementQuantity(product.id)}
              >
                -
              </span>
              <span className="counter--number counter"> {quantity} </span>
              <span
                className="counter--action increment"
                onClick={() => doIncrementQuantity(product.id)}
              >
                +
              </span>
            </div>
            <div className="price">
              {formatCurrency(currency, product.price * quantity)}
            </div>
          </div>
        </div>
        <div className="product--image">
          <img src={product.image_url} alt={product.title} />
        </div>
      </div>
    </StyledSingleCartItem>
  );
};
const StyledSingleCartItem = styled.div`
  .cart--item {
    display: flex;
    flex-wrap: wrap;
    min-height: inherit;
    max-height: inherit;
    justify-content: space-between;
    position: relative;
    margin-bottom: 20px;
    background: #fff;
    padding: 15px;

    .product--description {
      color: #1e2d2b;
      width: 65%;
      line-height: 18px;
      font-size: 10px;
      margin-top: 5px;
      letter-spacing: 0.02px;
      min-height: 100px;

      .remove--product {
        float: right;
        padding-right: 5px;
        position: absolute;
        right: 9px;
        top: 6px;
        font-size: 20px;
        opacity: 0.7;
        cursor: pointer;
        color: #000;
      }
      h6 {
        color: #1e2d2b;
        margin-bottom: 0;
        font-size: 13px;
        letter-spacing: 0.03px;
        padding: 0;
        text-rendering: optimizeLegibility;
        line-height: 1.5;
      }
    }
    .quantity {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 15px;

      .quantity--selector {
        border: 0.5px solid #bcbcbc;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .counter {
          padding: 0 7px;
        }
        .counter--action {
          padding: 7px;
          cursor: pointer;
          outline: none;

          &::selection {
            background-color: transparent;
          }
        }
      }

      .price {
        float: right;
        padding: 0 10px;
        width: inherit;
        font-size: 13px;
        letter-spacing: 0.03px;
      }
    }
    .product--image {
      background-color: #fdfdfd;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #1e2d2b;
      width: 33.3%;
      padding-right: 15px;

      img {
        overflow: hidden;
        height: 80px;
        width: auto;
        object-fit: contain;
      }
    }
  }
`;
export default SingleCartItem;
