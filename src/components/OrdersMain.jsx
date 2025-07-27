import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import dayjs from "dayjs";
import { OrdersMainStyled } from "../styles/OrdersMain.styled";

function OrdersMain({ matchingOrders }) {
  return (
    <OrdersMainStyled>
      <div className="orders-page-title">Comenzile tale</div>
      <div className="orders-grid">
        {matchingOrders.map((matchingOrder) => {
          return (
            <div
              className="order-container"
              key={matchingOrder.id}
            >
              <div className="order-header">
                <div className="order-header-left-section">
                  <div className="order-date">
                    <div className="order-header-label">Data comanda:</div>
                    <div>
                      {dayjs(matchingOrder.orderTime).format("ddd,  MMMM D")}
                    </div>
                  </div>
                  <div className="order-total">
                    <div className="order-header-label">Total:</div>
                    <div>${formatPrice(matchingOrder.total)}</div>
                  </div>
                </div>

                <div className="order-header-right-section">
                  <div className="order-header-label"> ID Comanda:</div>
                  <div>{matchingOrder.id}</div>
                </div>
              </div>

              <div className="order-details-grid">
                {matchingOrder.items.map((item, index) => (
                  <div
                    className="order-product"
                    key={item.id}
                  >
                    <div className="orders-product-image-container">
                      <img
                        className="orders-product-image"
                        src={item.image}
                        alt={item.name}
                        width={250}
                        height={250}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="orders-product-details">
                      <div className="orders-product-name">{item.name}</div>
                      <div className="orders-product-delivery-date">
                        Data sosire:{" "}
                        {dayjs(
                          matchingOrder.products[index].estimatedDeliveryTime
                        ).format("ddd, MMMM D")}
                      </div>
                      <div className="orders-product-quantity">
                        Cantitate: {item.quantity}
                      </div>
                      <Link
                        to={`/home/${matchingOrder.products[index].productId}`}
                        className="buy-again-button"
                      >
                        <img
                          className="buy-again-icon"
                          src="/images/icons/buy-again.webp"
                          alt="Buy again"
                          width={20}
                          height={20}
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="buy-again-message">
                          Cumpara din nou
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}

                {matchingOrder.deliveryOption === "2" && (
                  <div className="product-actions">
                    <Link to={`/tracking/${matchingOrder.id}`}>
                      <button className="track-package-button button-secondary">
                        Urmareste livrarea
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </OrdersMainStyled>
  );
}

export default OrdersMain;
