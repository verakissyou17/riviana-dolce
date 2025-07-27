import styled from "styled-components";

export const CheckoutMainStyled = styled.main`
  max-width: 32rem;
  margin-inline: auto;
  padding-inline: 0.5em;
  margin-top: calc(var(--header-height) + 5vh);

  .page-title {
    font-weight: 400;
    margin-bottom: 0.75em;
    margin-left: 0.5em;
  }

  .checkout-grid {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    align-items: start;
  }

  @media (min-width: 55em) {
    max-width: 68.75rem;

    .checkout-grid {
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
      row-gap: 0;
      align-items: auto;
    }
  }
`;
