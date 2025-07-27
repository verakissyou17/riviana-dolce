import styled from "styled-components";

export const MainStyled = styled.main`
  margin-top: calc(var(--header-height) + 1vh);

  .products-container {
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    width: 100%;
    max-width: 18.75em;
    gap: 2rem;
    margin: 2em auto;
    padding: 1em;
  }

  .product-container {
    flex: 1 1 15em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--bg-product-container);
    border-radius: 1rem;
    box-shadow: 0.125em 0.125em 0.3125em rgba(82, 82, 82, 0.25);
  }

  .product-image-container {
    height: 12em;
    width: 100%;
  }

  .product-image {
    border-radius: 1rem 1rem 0 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .product-details {
    padding: 1em 0.5em;
  }

  .product-name h1 {
    font-family: "Cookie", cursive, system-ui;
    font-size: clamp(1rem, 0.648rem + 1.502vw, 2.5rem);
    font-weight: 400;
    line-height: 1;
    margin-bottom: 1em;
  }

  .product-price {
    font-family: "Nunito Sans", sans-serif;
    color: var(--added);
    font-weight: 400;
    font-size: 1rem;
    margin-bottom: 1em;
    display: flex;
  }

  .highlight {
    border: 3px solid var(--bg-header);
    border-radius: 12px;
    transition: border 0.3s ease;
  }

  @media (min-width: 50em) {
    .products-container {
      max-width: 35em;
    }
  }

  @media (min-width: 65em) {
    .product-container.filtred {
      max-width: 40%;
    }

    .products-container {
      max-width: 70em;
    }
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .quantity-container button {
    border: none;
    outline: none;
    background-color: transparent;
    color: var(--white);
    font-size: inherit;
  }

  .delete-btn,
  .add-to-cart-btn {
    justify-content: center;
  }
`;
