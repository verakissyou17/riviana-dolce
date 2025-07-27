import { PageBannerStyled } from "../styles/PageBanner.styled";

function PageBanner() {
  return (
    <PageBannerStyled>
      <h1>Riviana Dolce</h1>
      <div className="hero--section">
        {" "}
        <h2>
          The most <span>delicious</span> cakes on the planet or even more.
        </h2>
      </div>
    </PageBannerStyled>
  );
}

export default PageBanner;
