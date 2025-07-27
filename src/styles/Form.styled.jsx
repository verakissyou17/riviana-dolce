import styled from "styled-components";

export const FormStyled = styled.form`
  .delivery-options-title {
    line-height: 1;
    margin-bottom: 0.75em;
  }

  .form-group {
    display: flex;
    gap: 0.5rem;
    border: 2px solid var(--bg-header);
    border-radius: 0.25rem;
    padding: 1em;
    margin-bottom: 1.5rem;
  }

  .radio-group,
  .delivery-option,
  .delivery-options-details {
    display: flex;
    gap: 0.5rem;
  }

  .delivery-options-details {
    flex-direction: column;
    flex: 1;
  }

  .delivery-option input {
    cursor: pointer;
    width: 1.2rem;
    height: 1.2rem;
  }

  .delivery-option-date {
    color: var(--delivery-option-date);
    font-weight: 400;
  }

  .delivery-option-price {
    font-family: "Nunito Sans", sans-serif;
    color: var(--delivery-option-price);
    font-size: 0.9375rem;
  }

  .user-form {
    border: 1px solid var(--white);
    padding: 1em;
    border-radius: 0.25em;
    margin-bottom: 1em;
  }

  .user-form-group {
    display: flex;
    padding: 0.5em;
  }

  .user-form-group label {
    display: block;
    margin-right: 0.5em;
  }

  .user-form-group input {
    background-color: transparent;
    border-bottom: 1px solid var(--border-line);
    flex: 1;
    margin-right: 0.5em;
  }

  #number,
  #block,
  #stair,
  #apart,
  #floor {
    max-width: 2rem;
  }

  @media (min-width: 65em) {
    gap: 3rem;
  }
`;
