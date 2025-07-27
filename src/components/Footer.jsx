import { FooterStyled } from "../styles/Footer.styled";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterStyled>
      <small>@Copyright {currentYear}. </small>
      <small>Made with 💞 by Vera</small>
    </FooterStyled>
  );
}

export default Footer;
