import CheckoutHeader from "../components/CheckoutHeader";
import CheckoutMain from "../components/CheckoutMain";
import Footer from "../components/Footer";
import { useProducts } from "../contexts/useProducts";
import { useOrders } from "../contexts/useOrders";

function Checkout() {
  const {
    products,
    cart,
    setCart,
    totalQuantity,
    matchingProducts,
    updateCartItemQuantity,
    selectedDeliveryOptionId,
    handleSelectedOptionId,
  } = useProducts();
  const { addOrder } = useOrders();
  return (
    <>
      <CheckoutHeader totalQuantity={totalQuantity} />
      <CheckoutMain
        products={products}
        cart={cart}
        setCart={setCart}
        totalQuantity={totalQuantity}
        matchingProducts={matchingProducts}
        updateCartItemQuantity={updateCartItemQuantity}
        handleSelectedOptionId={handleSelectedOptionId}
        selectedDeliveryOptionId={selectedDeliveryOptionId}
        addOrder={addOrder}
      />
      <Footer />
    </>
  );
}

export default Checkout;
