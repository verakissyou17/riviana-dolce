import { useOrders } from "../contexts/useOrders";
import { formatPrice } from "../utils/formatPrice";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/ro";
dayjs.locale("ro");
import { getDeliveryOptionById } from "../utils/getDeliveryOption";
import { PaymentSummaryStyled } from "../styles/PaymentSummary.styled";
import { deliveryOptions } from "../data/deliveryOptions";
import { FormStyled } from "../styles/Form.styled";
import { useState } from "react";

function PaymentSummary({
  totalQuantity,
  matchingProducts,
  selectedDeliveryOptionId,
  handleSelectedOptionId,
  cart,
  setCart,
}) {
  const { addOrder } = useOrders();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    address: {
      street: "",
      number: "",
      building: "",
      stairwell: "",
      apartment: "",
      floor: "",
      city: "",
    },
  });

  const selectedDeliveryOption = getDeliveryOptionById(
    selectedDeliveryOptionId
  );

  const itemsTotalCents = matchingProducts.reduce((sum, product) => {
    return sum + product.priceCents * product.quantity;
  }, 0);

  const shippingTotalCents = selectedDeliveryOption?.priceCents || 0;

  const subtotalCents = itemsTotalCents + shippingTotalCents;

  function handlePlaceOrder() {
    const orderId = crypto.randomUUID();
    if (cart.length === 0 && userData.length === 0) return;

    try {
      const deliveryDays = selectedDeliveryOption?.deliveryDays;
      const order = {
        id: orderId,
        orderTime: dayjs().toISOString(),
        user: userData,
        products: cart.map((cartItem) => ({
          productId: cartItem.productId,
          quantity: cartItem.quantity,
          estimatedDeliveryTime: dayjs()
            .add(Number(deliveryDays), "day")
            .toISOString(),
        })),
        total: subtotalCents,
        deliveryOption: selectedDeliveryOptionId,
      };

      addOrder(order);
      setCart([]);
      localStorage.removeItem("cart");
      navigate("/orders");
    } catch (err) {
      console.error("Unexpected error. Try again later.", err);
    }
  }

function handleInputChange(e) {
  const { name, value } = e.target;

  if (
    ["street", "number", "building", "stairwell", "apartment", "floor", "city"].includes(name)
  ) {
    setUserData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value,
      },
    }));
  } else {
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
}



  return (
    <PaymentSummaryStyled>
      <FormStyled>
        <h3 className="delivery-options-title">Alege o optiune:</h3>
        <div className="form-group">
          {deliveryOptions.map((option) => {
            return (
              <div
                key={option.id}
                className="radio-group"
              >
                <label className="delivery-option">
                  <input
                    type="radio"
                    name="delivery"
                    checked={
                      option.id === selectedDeliveryOptionId ? "checked" : ""
                    }
                    onChange={() => handleSelectedOptionId(option.id)}
                  />
                  {option.id === "1" ? "Ridicare personala:" : "Livrare acasa:"}
                </label>
                <div className="delivery-options-details">
                  <span className="delivery-option-date">
                    {dayjs()
                      .add(Number(option.deliveryDays), "day")
                      .format("dddd, MMMM D")}
                  </span>
                  <span className="delivery-option-price">
                    {formatPrice(option.priceCents.toFixed(2))}lei
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="user-form">
          <div className="user-form-group">
            <label htmlFor="name">Nume</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
            />
            <label htmlFor="surname">Prenume</label>
            <input
              type="text"
              name="surname"
              id="surname"
              onChange={handleInputChange}
            />
          </div>
          <div className="user-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleInputChange}
            />
            <label htmlFor="phone">Telefon</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              onChange={handleInputChange}
            />
          </div>
          <div className="user-form-group">
            <label
              htmlFor="street"
              className="for"
              onChange={handleInputChange}
            >
              Strada
            </label>
            <input
              type="text"
              name="street"
              id="street"
              onChange={handleInputChange}
            />
            <label htmlFor="number">Nr.</label>
            <input
              type="text"
              name="number"
              id="number"
              onChange={handleInputChange}
            />
          </div>
          <div className="user-form-group">
            <label htmlFor="block">Bloc</label>
            <input
              type="text"
              name="building"
              id="block"
              onChange={handleInputChange}
            />
            <label htmlFor="stair">Scara</label>
            <input
              type="text"
              name="stairwell"
              id="stair"
              onChange={handleInputChange}
            />
            <label htmlFor="apart">Apartament</label>
            <input
              type="text"
              name="apartment"
              id="apart"
              onChange={handleInputChange}
            />
            <label htmlFor="floor">Etaj</label>
            <input
              type="text"
              name="floor"
              id="floor"
              onChange={handleInputChange}
            />
            <label htmlFor="city">Oras</label>
            <input
              type="text"
              name="city"
              id="city"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </FormStyled>

      <div className="payment-summary">
        <div className="payment-summary-title">Sumar comanda</div>
        <div className="payment-summary-row">
          <div>Produse ({totalQuantity}):</div>
          <div className="payment-summary-money">
            {" "}
            {formatPrice(itemsTotalCents)}lei
          </div>
        </div>

        <div className="payment-summary-row">
          <div>Taxa de livrare</div>
          <div className="payment-summary-money">
            {formatPrice(shippingTotalCents)}lei
          </div>
        </div>

        <div className="payment-summary-row subtotal-row">
          <div>Total + taxa de livrare:</div>
          <div className="payment-summary-money">
            {" "}
            {formatPrice(subtotalCents)}lei
          </div>
        </div>

        <div className="payment-summary-row total-row">
          <div>Total comanda:</div>
          <div className="payment-summary-money">
            {formatPrice(subtotalCents)}lei
          </div>
        </div>

        <button
          onClick={handlePlaceOrder}
          className="place-order-button button-primary"
        >
          Plasează comanda
        </button>
      </div>
    </PaymentSummaryStyled>
  );
}

export default PaymentSummary;
