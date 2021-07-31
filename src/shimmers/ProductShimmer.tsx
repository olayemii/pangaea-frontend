import Skeleton from "react-loading-skeleton";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";

type ProductShimmerProps = {
  className?: string;
  children?: ReactNode;
};

const ProductShimmer: FC<ProductShimmerProps> = (props) => {
  return (
    <SkeletonWrapper>
      <Skeleton duration={5} height={"170px"} className="skeleton--item" />
      <Skeleton duration={5} height={"35px"} className="skeleton--item" />
      <Skeleton duration={5} height={"25px"} className="skeleton--item" />
      <Skeleton duration={5} height={"40px"} className="skeleton--item" />
    </SkeletonWrapper>
  );
};

const SkeletonWrapper = styled.div`
  width: 100%;
  .skeleton--item {
    @media screen and (min-width: 992px) {
      margin-left: 1.25rem;
      margin-right: 1.25rem;
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;
export default ProductShimmer;
