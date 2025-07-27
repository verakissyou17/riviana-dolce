import { PageBannerStyled } from "../styles/PageBanner.styled";

function PageBanner() {
  return (
    <PageBannerStyled>
      <h1>Riviana Dolce</h1>
      <div className="hero--section">
        {" "}
        <h2>
          Delicii rafinate,<span> inspirate din pasiune </span> si drag de
          gustul bun.
        </h2>
      </div>
    </PageBannerStyled>
  );
}

export default PageBanner;
