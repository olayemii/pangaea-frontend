import React, { FC } from "react";
import styled from "styled-components";
import useCart from "../../hooks/useCart";
import useConfig from "../../hooks/useConfig";
import { formatCurrency } from "../../utils/currencyHelper";
import { IProductViewProps } from "../../utils/interfaces";

const Product: FC<IProductViewProps> = ({ product }) => {
  const { currency, doAddItem } = useCart();
  const { doToggleDrawer } = useConfig();
  return (
    <StyledProduct>
      <div className="product--item">
        <div className="product--image--wrapper">
          <a href="/products/copy-of-up-top-management-set">
            <div className="product--image--container">
              <div className="img--link">
                <img
                  className="product--image"
                  alt={product.title}
                  src={product.image_url}
                />
                <h2>{product.title}</h2>
              </div>
            </div>
          </a>
        </div>
        <div className="product--price--container">
          <p>{formatCurrency(currency, product.price)}</p>
        </div>
        <button
          type="button"
          onClick={(_) => {
            doAddItem(product);
            doToggleDrawer();
          }}
          className="add--cart--btn"
        >
          Add to Cart
        </button>
      </div>
    </StyledProduct>
  );
};

const StyledProduct = styled.article`
  flex-direction: column;
  display: flex;
  text-align: center;
  background: rgb(226, 230, 227);

  .product--item {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1 1 0%;

    .product--image--wrapper {
      flex: 1 1 0%;
      position: relative;

      .img--link {
        flex-direction: column;
        justify-content: flex-start;
        display: flex;
        height: 100%;
      }
      .product--image--container {
        flex-direction: column;
        justify-content: flex-start;
        display: flex;
        height: 100%;

        .product--image {
          object-fit: contain;
          max-width: 100%;
          max-height: 170px;
          flex: 1 1 0%;
        }

        h2 {
          font-family: "FF Bau Regular", sans-serif;
          font-weight: 400;
          font-size: 0.8125rem;
          line-height: 1.7;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;

          @media screen and (min-width: 992px) {
            font-size: 1rem;
            line-height: 1.5;
          }
        }
      }
    }

    .product--price--container {
      p {
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }
    }
    .add--cart--btn {
      margin-top: 0.5rem;
      display: flex;
      appearance: none;
      align-items: center;
      justify-content: center;
      transition: all 250ms ease 0s;
      user-select: none;
      position: relative;
      vertical-align: middle;
      outline: none;
      border: 0px;
      line-height: 1.2;
      font-size: 12px;
      padding-top: 2px;
      font-weight: 600;
      padding-left: 1rem;
      padding-right: 1rem;
      min-height: 52px;
      background: rgb(75, 85, 72);
      color: rgb(252, 252, 249);
      width: 100%;
      max-width: 100%;
      white-space: normal;

      @media screen and (min-width: 992px) {
        min-width: 190px;
        max-width: 157px;
      }
    }
  }
`;

export default Product;
