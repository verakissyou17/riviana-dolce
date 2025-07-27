import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: var(--bg-header);
  color: var(--white);
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);

  .header-left-section {
    text-align: center;
  }

  .header-link {
    display: inline-block;
    border-radius: 0.125em;
    padding: 0.25em;
    cursor: pointer;
    color: var(--white);
    text-decoration: none;
  }

  .header-link:hover {
    box-shadow: 2px 2px 3px var(--border-line), -2px -2px 3px var(--border-line);
  }

  .header-middle-section {
    flex: 1;
    max-width: 50em;
    margin-inline: 0.5em;
    display: flex;
  }

  .search-bar {
    flex: 1;
    width: 10%;
    font-size: 1rem;
    height: 2.5rem;
    padding-left: 1em;
    border-radius: 0.25em 0 0 0.25em;
  }

  .search-button {
    background-color: var(--white);
    width: 2.5rem;
    height: 2.5rem;
    border-top-right-radius: 0.25em;
    border-bottom-right-radius: 0.25em;
    flex-shrink: 0;
    border-left: 1px solid var(--border-line);
    display: grid;
    place-content: center;
  }

  .search-icon {
    margin-left: 0.125em;
    margin-top: 0.1875em;
  }

  .header-right-section {
    width: 10em;
    padding-inline: 0.5em;
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .orders-link {
    padding-inline: 0.25em;
  }

  .cart-link {
    display: flex;
    align-items: center;
    position: relative;
    font-weight: 400;
  }

  .cart-text {
    align-self: flex-end;
  }

  .cart-quantity {
    position: absolute;
    top: 0;
    left: 1.5rem;
    width: 1.625rem;
    text-align: center;
  }

  .total-quantity-checkout {
    font-size: clamp(1.2rem, 0.742rem + 1.953vw, 2rem);
    text-align: right;
  }

  .checkout-right-section {
    max-width: 5em;
  }

  @media (min-width: 65em) {
    .header-left-section {
      width: 15em;
    }
  }
`;

export const LogoStyled = styled.div`
  display: none;
  color: var(--white);

  @media (min-width: 50em) {
    display: flex;
    font-size: clamp(1.2rem, 0.742rem + 1.953vw, 2.5rem);
  }
`;

export const MobileLogoStyled = styled.div`
  display: flex;
  font-size: clamp(1.2rem, 0.566rem + 2.704vw, 3rem);
  color: var(--white);

  @media (min-width: 50em) {
    display: none;
  }
`;
