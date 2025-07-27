import styled from "styled-components";

export const PageBannerStyled = styled.section`
  margin-top: calc(var(--header-height));
  box-shadow: 2px 0 3px 3px var(--border-line);
  background-color: var(--bg);
  background-image: url("/images/pattern.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 30rem;
  width: 100%;

  h1 {
    position: absolute;
    top: 10%;
    right: 5%;
    color: var(--bg-header);
    letter-spacing: 5px;
    font-size: 4rem;
    margin-right: 0.2em;
  }

  .hero--section {
    flex: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .hero--section h2 {
    display: block;
    color: var(--delivery-option-date);
    font-weight: 400;
    font-size: clamp(1.5rem, 0.972rem + 2.254vw, 3rem);
    margin-bottom: 1em;
  }

  .hero--section h2 span {
    color: var(--bg-header);
    font-style: italic;
  }

  @media (min-width: 65em) {
    height: 90vh;

    h1 {
      font-size: 5em;
    }
  }
`;
