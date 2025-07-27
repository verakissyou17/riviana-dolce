import { Link } from "react-router-dom";
import {
  HeaderStyled,
  LogoStyled,
  MobileLogoStyled,
} from "../styles/Header.styled";

function Header({
  totalQuantity,
  searchTerm,
  setSearchTerm,
  onSearchSubmit,
  setSubmittedSearch,
}) {
  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
    onSearchSubmit(trimmed);
    setSearchTerm("");
  };

  return (
    <HeaderStyled>
      <div className="header-left-section">
        <Link
          to="/home"
          onClick={() => {
            setSubmittedSearch("");
            setSearchTerm("");
          }}
        >
          <LogoStyled>Riviana Dolce</LogoStyled>
          <MobileLogoStyled>Riviana Dolce</MobileLogoStyled>
        </Link>
      </div>

      <div className="header-middle-section">
        <input
          className="search-bar"
          type="text"
          placeholder="Cauta produse..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(e);
            }
          }}
        />

        <button
          className="search-button"
          name="search-button"
          onClick={handleSearch}
        >
          <img
            className="search-icon"
            src="/images/icons/search-icon.svg"
            aria-labelledby="search-button"
            alt="search-button"
            width={24}
            height={24}
            loading="lazy"
            decoding="async"
          />
        </button>
      </div>

      <div className="header-right-section">
        <Link
          className="orders-link header-link"
          to="/orders"
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
            loading="lazy"
            decoding="async"
            width={60}
            height={40}
          />
          <div
            className="cart-quantity"
            aria-labelledby="cart-link"
          >
            {totalQuantity}
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
