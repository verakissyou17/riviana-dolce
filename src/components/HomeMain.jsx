import { formatPrice } from "../utils/formatPrice";
import { MainStyled, QuantityContainer } from "../styles/Main.styled";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function HomeMain({ products, setQuantities, quantities, addToCart }) {
  const { orderedId } = useParams();

  useEffect(() => {
    if (orderedId) {
      const el = document.getElementById(`product-${orderedId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("highlight");

        setTimeout(() => {
          el.classList.remove("highlight");
        }, 3000);
      }
    }
  }, [orderedId]);



  function incrementQuantity(productId) {
    setQuantities((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  }

  function decrementQuantity(productId) {
    setQuantities((prev) => {
      const currentQty = prev[productId] || 0;
      if (currentQty <= 0) return prev;
      return {
        ...prev,
        [productId]: currentQty - 1,
      };
    });
  }
  return (
    <MainStyled>
        {products.length === 0 ? (
          <p className="text-no-match">No products match your search.</p>
        ) : (
          products.map((product) => {
            const productQty = quantities[product.id] || 0;
            return (
              <div
                id={`product-${product.id}`}
                className={`product-container ${products.length === 1 ? "single-product" : ""}`}
                key={product.id}
              >
                <div className="product-image-container">
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    width={250}
                    height={250}
                  />
                </div>
                <section className="product-details">
                  <div className="product-name">
                    <h1>{product.name}</h1>
                  </div>
                  <div className="product-price">
                    {formatPrice(product.priceCents)}lei
                  </div>
                  <QuantityContainer>
                    <div className="quantity-container primary-btn">
                      <button
                        name="decrement-quantity"
                        onClick={() => decrementQuantity(product.id)}
                      >
                        -
                      </button>
                      <span className="quantity">{productQty}</span>
                      <button
                        name="increment-quantity"
                        onClick={() => incrementQuantity(product.id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="add-to-cart-btn primary-btn"
                      onClick={() => addToCart(product.id, productQty)}
                    >
                      Adauga
                    </button>
                  </QuantityContainer>
                </section>
              </div>
            );
          })
        )}

    </MainStyled>
  );
}

export default HomeMain;
