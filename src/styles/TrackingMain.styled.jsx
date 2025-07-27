import styled from "styled-components";

export const TrackingMainStyled = styled.main`
  max-width: 53.125rem;
  margin-top: calc(var(--header-height) + 5vh);
  padding: 1.5em;
  margin-inline: auto;

  .tracking-product {
    display: grid;
    grid-template-columns: 1fr 10rem;
    margin-bottom: 1em;
    border: 2px solid var(--bg-header);
    background-color: var(--bg-product-container);
    border-radius: 0.5rem;
    padding: 1em;

  }

  .back-to-orders-link {
    display: inline-block;
    margin-bottom: 1.875rem;
  }

  .tracking-delivery-date {
    font-size: 1.5625rem;
    font-weight: 400;
    margin-bottom: 0.625rem;
  }

  .product-info {
    margin-bottom: 0.1875rem;
  }

  .tracking-product-image {
    width: 10rem;
    height: 10rem;
    border-radius: 0.5rem;
  }

  .progress-labels-container {
    display: flex;
    justify-content: space-between;
    font-size: 1.1rem;
    font-weight: 400;
    margin-top: 3em;
    padding: 0.25em;
  }

  .progress-bar-container {
    height: 1.6rem;
    width: 100%;
    border: 1px solid var(--added);
    border-radius: 1.6rem;
    overflow: hidden;
    margin-bottom: 1em;
  }

  .progress-bar {
    height: 100%;
    background-color: var(--delivery-option-date);
    border-radius: 3.125rem;
  }
`;
