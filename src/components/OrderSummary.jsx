import dayjs from "dayjs";
import "dayjs/locale/ro";
dayjs.locale("ro");
import { formatPrice } from "../utils/formatPrice";
import { deliveryOptions } from "../data/deliveryOptions";
import { QuantityContainer } from "../styles/Main.styled";
import { OrderSummaryStyled } from "../styles/OrderSummary.styled";

function OrderSummary({
  matchingProducts,
  updateCartItemQuantity,
  selectedDeliveryOptionId,
}) {
  function handleQuantityChange(productId, newQuantity) {
    updateCartItemQuantity(productId, newQuantity);
  }

  function handleDelete(productId) {
    updateCartItemQuantity(productId, 0);
  }

  return (
    <OrderSummaryStyled>
      {matchingProducts.map((matchingProduct) =>
        matchingProduct.quantity > 0 ? (
          <div
            key={matchingProduct.id}
            className="cart-item-container"
          >
            {deliveryOptions.map((option) =>
              option.id === selectedDeliveryOptionId ? (
                <div
                  key={option.id}
                  className="delivery-date"
                >
                  {dayjs()
                    .add(Number(option.deliveryDays), "day")
                    .format("dddd, MMMM D")}
                </div>
              ) : null
            )}
            <section className="cart-item-details-grid">
              <img
                className="checkout-product-image"
                src={matchingProduct.image}
                alt={matchingProduct.name}
                width={250}
                height={250}
                loading="lazy"
                decoding="async"
              />
              <div className="cart-item-details">
                <h2 className="checkout-product-name">
                  {matchingProduct.name}
                </h2>
                <div className="checkout-product-price">
                  {formatPrice(matchingProduct.priceCents)}lei
                </div>
                <QuantityContainer>
                  <div className="quantity-container primary-btn">
                    <button
                      name="decrement-quantity"
                      onClick={() =>
                        handleQuantityChange(
                          matchingProduct.id,
                          matchingProduct.quantity - 1
                        )
                      }
                    >
                      -
                    </button>
                    <span className="quantity">{matchingProduct.quantity}</span>

                    <button
                      name="increment-quantity"
                      onClick={() =>
                        handleQuantityChange(
                          matchingProduct.id,
                          matchingProduct.quantity + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="delete-btn primary-btn"
                    onClick={() =>
                      handleDelete(matchingProduct.id, matchingProduct.quantity)
                    }
                  >
                    Sterge
                  </button>
                </QuantityContainer>
              </div>
            </section>
          </div>
        ) : null
      )}
    </OrderSummaryStyled>
  );
}

export default OrderSummary;
