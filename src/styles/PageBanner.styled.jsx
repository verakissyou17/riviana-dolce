import styled from "styled-components";

export const PageBannerStyled = styled.section`
  margin-top: calc(var(--header-height));
  background-color: var(--bg);
  background-image: url("/riviana-dolce/images/pattern.webp");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 150px;
  width: 100%;

  h1 {
    position: absolute;
    top: 0;
    right: 10%;
    color: var(--bg-header);
    font-size: 4rem;
  }

  .hero--section {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

    .hero--section h2 {
      display: block;
      color: var(--delivery-option-date);
      font-weight: 400;
      margin-top: 2em;
    }

    .hero--section h2 span {
      color: var(--bg-header);
      font-style: italic;
    }

    @media(min-width: 65em) {
        h1 {
            font-size: 5em;
        }
    }
`;
