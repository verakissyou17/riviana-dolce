import styled from "styled-components";

export const PaymentSummaryStyled = styled.div`
  .payment-summary {
    border-radius: 0.5rem;
    padding: 1em;
    border: 1px solid var(--bg-header);
    background-color: var(--bg-product-container);
  }

  .payment-summary-title {
    font-weight: 400;
    font-size: 1.125rem;
    margin-bottom: 0.75rem;
  }

  .payment-summary-row {
    display: grid;
    grid-template-columns: 1fr auto;
    margin-bottom: 0.5625rem;
  }

  .payment-summary-money {
    text-align: right;
    font-family: "Nunito Sans", sans-serif;
  }

  .subtotal-row div {
    padding-top: 0.5625rem;
    border-top: 2px solid var(--border-line);
  }

  .total-row {
    color: var(--bg-header);
    font-weight: 400;
    font-size: 1.125rem;
    border-top: 2px solid var(--border-line);
    padding-top: 1.125rem;
  }

  .place-order-button {
    width: 100%;
    padding-block: 0.75rem;
    border-radius: 0.5rem;
    margin-block: 0.6875rem 0.9375rem;
    background-color: var(--bg-header);
    color: var(--white);
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1px;
    font-family: "Nunito Sans", sans-serif;
  }
`;
