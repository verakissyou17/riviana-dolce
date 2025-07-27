import { Link } from "react-router-dom";
import {
  HeaderStyled,
  LogoStyled,
  MobileLogoStyled,
} from "../styles/Header.styled";

function Header() {
  return (
    <HeaderStyled>
      <div className="header-left-section">
        <Link to="/">
          <LogoStyled>Riviana Dolce</LogoStyled>
          <MobileLogoStyled>Riviana Dolce</MobileLogoStyled>
        </Link>
      </div>

      <div className="header-middle-section">
        <input
          className="search-bar"
          type="text"
          placeholder="Cauta produse..."
        />

        <button
          className="search-button"
          name="search-button"
        >
          <img
            className="search-icon"
            src="/images/icons/search-icon.svg"
            aria-labelledby="search-button"
            alt="search-button"
          />
        </button>
      </div>

      <div className="header-right-section">
        <Link
          to="/orders"
          className="orders-link header-link"
        >
          <span className="returns-text">Retururi</span>
          <br />
          <span className="orders-text">& Comenzi</span>
        </Link>

        <Link
          className="cart-link header-link"
          to="/checkout"
          name="cart-link"
        >
          <img
            className="cart-icon"
            src="/images/icons/cart-icon.webp"
            alt="cart-icon"
            aria-labelledby="cart-link"
          />
          <div
            className="cart-quantity"
            aria-labelledby="cart-link"
          >
            3
          </div>
          <div
            className="cart-text"
            aria-labelledby="cart-link"
          >
            Cart
          </div>
        </Link>
      </div>
    </HeaderStyled>
  );
}

export default Header;
