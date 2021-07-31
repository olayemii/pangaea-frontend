import React, { FC } from "react";
import styled from "styled-components";
import { ReactComponent as DropdownIcon } from "../../assets/svg/dropdown.svg";
const FilterSection: FC<{}> = () => {
  return (
    <StyledFilterSection>
      <div className="filter--section--content">
        <div className="title--subtitle--section">
          <h1>All Products</h1>
          <p>A 360° look at Lumin</p>
        </div>
        <div className="dropdown--section">
          <div className="dropdown--wrapper">
            <select defaultValue={""}>
              <option value="" disabled>
                Filter by
              </option>
              <option value="all-products">All Products</option>
              <option value="new-products">New Products</option>
              <option value="sets">Sets</option>
              <option value="skincare">Skincare</option>
              <option value="hair-and-body">Hair &amp; Body Care</option>
              <option value="accessories">Accessories</option>
            </select>
            <div className="dropdown--icon">
              <DropdownIcon />
            </div>
          </div>
        </div>
      </div>
    </StyledFilterSection>
  );
};

const StyledFilterSection = styled.div`
  padding: 1.5rem;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    padding: 2.5rem;
  }

  .filter--section--content {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    display: flex;
    padding-top: 4rem;
    padding-bottom: 14px;

    @media screen and (min-width: 992px) {
      padding-top: 5rem;
      padding-bottom: 4rem;
      flex-direction: row;
    }

    .title--subtitle--section {
      padding-right: 3rem;
      padding-left: 0rem;

      h1 {
        font-size: 1.5rem;
        line-height: 1.125em;

        @media screen and (min-width: 768px) {
          font-size: 2rem;
        }
        @media screen and (min-width: 992px) {
          font-size: 3rem;
          line-height: 1.25em;
        }
      }

      p {
        font-weight: 400;
        font-size: 0.8125rem;
        line-height: 1.7;
        margin-top: 0.5rem;

        @media screen and (min-width: 768px) {
          margin-top: 0.75rem;
        }

        @media screen and (min-width: 992px) {
          font-size: 1rem;
          line-height: 1.5;
        }
      }
    }

    .dropdown--section {
      flex: 1;
      margin-top: 1.5rem;
      width: 100%;
      max-width: 100%;

      @media screen and (min-width: 992px) {
        max-width: 400px;
      }

      .dropdown--wrapper {
        width: 100%;
        height: fit-content;
        position: relative;

        select {
          width: 100%;
          outline: 0;
          position: relative;
          appearance: none;
          transition: all 0.2s;
          padding-top: 2px;
          padding-bottom: 1px;
          line-height: normal;
          color: currentColor;
          height: 50px;
          font-size: 1rem;
          padding-left: 1.25rem;
          padding-right: 1.25rem;
          background: #fff;
          border: 1px solid #cdd1ce;
          border-radius: 0;
          padding-right: 2rem;

          @media screen and (min-width: 992px) {
            height: 57px;
          }
        }
        .dropdown--icon {
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

export default FilterSection;
