import styled from "styled-components";

export const MainStyled = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14.375rem, 1fr));
    gap: 2rem;
    padding: 1em;
    width: 100%;
    max-width: 1400px;
    margin: 1em auto; 

    .text-no-match {
      text-align: center;
      font-weight: 900;
      font-family: "Nunito Sans", sans-serif;
      color: var( --link-primary-hover);
    }

  .product-container.single-product {
    max-width: 250px;
    border: 2px dotted var(--bg-header);
    border-radius: 1rem;
  }

  .product-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 1rem;
    box-shadow: 0.125em 0.125em 0.3125em rgba(82, 82, 82, 0.25);
    background-color: var(--bg-product-container);
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
    transition: border 0.3s ease;
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
