import { Link } from "react-router-dom";
import { useProducts } from "../contexts/useProducts";
import {
  HeaderStyled,
  LogoStyled,
  MobileLogoStyled,
} from "../styles/Header.styled";

function CheckoutHeader() {
  const { totalQuantity } = useProducts();
  return (
    <HeaderStyled>
      <div className="header-left-section">
        <Link
          to="/home"
          className="header-link"
        >
          <LogoStyled>Riviana Dolce</LogoStyled>
          <MobileLogoStyled>Riviana Dolce</MobileLogoStyled>
        </Link>
      </div>
      <div className="header-middle-section total-quantity-checkout header-link">
        Produse ({totalQuantity})
      </div>
      <div className="header-right-section checkout-right-section">
        <Link
          className="orders-link header-link"
          to="/orders"
        >
          <span className="returns-text">Retururi</span>
          <br />
          <span className="orders-text">& Comenzi</span>
        </Link>
      </div>
    </HeaderStyled>
  );
}

export default CheckoutHeader;
