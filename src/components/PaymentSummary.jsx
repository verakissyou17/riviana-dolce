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
  const [formError, setFormError] = useState("");

  const selectedDeliveryOption = getDeliveryOptionById(
    selectedDeliveryOptionId,
  );

  const itemsTotalCents = matchingProducts.reduce((sum, product) => {
    return sum + product.priceCents * product.quantity;
  }, 0);

  const shippingTotalCents = selectedDeliveryOption?.priceCents || 0;

  const subtotalCents = itemsTotalCents + shippingTotalCents;

  function validateForm() {
    const allFieldsEmpty =
      !userData.name &&
      !userData.surname &&
      !userData.email &&
      !userData.phone &&
      !userData.address.street &&
      !userData.address.number &&
      !userData.address.city;
    if (allFieldsEmpty) {
      return "Formularul trebuie completat.";
    }

    const requiredFields = ["name", "surname", "email", "phone"];
    for (const field of requiredFields) {
      if (!userData[field] || userData[field].trim() === "") {
        return `Campul '${field}' este obligatoriu.`;
      }
    }
    const addressFields = ["street", "number", "city"];
    for (const field of addressFields) {
      if (!userData.address[field] || userData.address[field].trim() === "") {
        return `Campul '${field}' din address este obligatoriu.`;
      }
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(userData.email)) {
      return "Email invalid.";
    }

    if (!/^\d{10,}$/.test(userData.phone.replace(/\D/g, ""))) {
      return "Phone invalid.";
    }
    return "";
  }

  function handlePlaceOrder() {
    const orderId = crypto.randomUUID();
    if (cart.length === 0) {
      setFormError("Cosul este gol.");
      return;
    }

    if (selectedDeliveryOptionId === "2") {
      const errorMsg = validateForm();
      if (errorMsg) {
        setFormError(errorMsg);
        return;
      }
    }
    setFormError("");
    try {
      const deliveryDays = selectedDeliveryOption?.deliveryDays;
      const order = {
        id: orderId,
        orderTime: dayjs().toISOString(),
        user: selectedDeliveryOptionId === "2" ? userData : {},
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
      setFormError("Unexpected error. Try again later.");
      console.error("Unexpected error. Try again later.", err);
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;

    if (
      [
        "street",
        "number",
        "building",
        "stairwell",
        "apartment",
        "floor",
        "city",
      ].includes(name)
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
          {deliveryOptions.map((option) => (
            <div key={option.id} className="radio-group">
              <label className="delivery-option">
                <input
                  type="radio"
                  name="delivery"
                  checked={option.id === selectedDeliveryOptionId}
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
          ))}
        </div>
        {selectedDeliveryOptionId === "2" && (
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
              <label htmlFor="street" className="for">
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
              <label htmlFor="buildingk">Bloc</label>
              <input
                type="text"
                name="building"
                id="buildingk"
                onChange={handleInputChange}
              />
              <label htmlFor="stair">Scara</label>
              <input
                type="text"
                name="stairwell"
                id="stair"
                onChange={handleInputChange}
              />
              <label htmlFor="apart">Ap.</label>
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
            {formError && <div className="error-message">{formError}</div>}
          </div>
        )}
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
