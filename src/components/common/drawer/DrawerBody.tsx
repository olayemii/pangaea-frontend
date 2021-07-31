import React, { FC } from "react";
import styled from "styled-components";
import useCart from "../../../hooks/useCart";
import SingleCartItem from "./SingleCartItem";

const DrawerBody: FC = (): JSX.Element => {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return <EmptyParagraph>There are no items in your cart.</EmptyParagraph>;
  }
  return (
    <>
      {cartItems.map((item) => {
        return <SingleCartItem key={item.product.id} item={item} />;
      })}
    </>
  );
};

const EmptyParagraph = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 12px;
`;

export default DrawerBody;
