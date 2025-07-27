import styled from "styled-components";

export const OrdersMainStyled = styled.main`
  max-width: 53.125em;
  margin-top: calc(var(--header-height) + 5vh);
  padding-top: 0.5em;
  margin-inline: auto;

  .orders-page-title {
    font-weight: 400;
    font-size: 1.625em;
    margin-bottom: 1em;
    margin-left: 0.5em;
  }

  .orders-grid {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 3.125em;
  }

  .order-header {
    background-color: rgb(240, 242, 242);
    border: 0.0625em solid rgb(213, 217, 217);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    line-height: 1.4375em;
    padding: 0.9375em;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
  }

  .order-header-right-section {
    display: flex;
  }

  .order-header-label {
    font-weight: 400;
    margin-right: 1em;
  }

  .order-date,
  .order-total {
    display: grid;
    grid-template-columns: auto 1fr;
    margin-right: 0;
  }

  .order-details-grid {
    padding: 2em 1.5625em;
    padding-bottom: 0;
    border: 0.0625em solid rgb(213, 217, 217);
    border-top: none;
    border-radius: 0 0 0.5em 0.5em;
  }

  .order-product {
    display: grid;
    grid-template-columns: 10rem 1fr;
    gap: 1rem;
    margin-bottom: 1.5em;
  }

  .orders-product-image-container {
    max-width: 10rem;
    max-height: 7rem;
    border-radius: 0.25em;
  }

  .orders-product-image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.25em;
  }

  .orders-product-name {
    font-weight: 400;
    margin-bottom: 0.3125em;
  }

  .orders-product-delivery-date {
    margin-bottom: 0.1875em;
  }

  .orders-product-quantity {
    margin-bottom: 0.5em;
  }

  .buy-again-button {
    font-size: 0.9375em;
    text-decoration: none;
    font-family: "Cookie", cursive, system-ui;
    font-weight: 400;
    width: 8.75em;
    height: 2.25em;
    border-radius: 0.5em;
    background-color: var(--bg-header);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.625em;
    padding: 0.5em;
  }

  .buy-again-icon {
    width: 1.565em;
    margin-right: 0.9375em;
  }

  .product-actions {
    margin-bottom: 1em;
    margin-inline: auto;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .track-package-button {
    flex: 1;
    padding: 0.5em 2em;
    font-size: 0.9375em;
    color: rgb(33, 33, 33);
    background: var(--white);
    border: 0.0625em solid rgb(213, 217, 217);
    border-radius: 0.5rem;
  }

  .track-package-button:hover {
    box-shadow: 0 0.125em 0.3125em rgba(114, 114, 114, 0.5);
  }

  @media (min-width: 24em) {
    padding-inline: 1em;

    @media (min-width: 50em) {
      .order-header {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 1.25em 1.5625em;
      }

      .order-header-left-section {
        display: flex;
        flex-shrink: 0;
      }

      .order-header-right-section {
        flex-direction: column;
      }

      .order-header-label {
        margin-right: 0;
      }

      .order-date,
      .order-total {
        display: block;
        margin-right: 2.8125em;
      }
    }
  }
`;
