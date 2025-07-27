import Header from "../components/Header";
import OrdersMain from "../components/OrdersMain";
import Footer from "../components/Footer";
import { useProducts } from "../contexts/useProducts";
import { useOrders } from "../contexts/useOrders";

function Orders() {
  const { totalQuantity} = useProducts();
  const { matchingOrders} = useOrders();
  return (
    <>
      <Header totalQuantity={totalQuantity} />
      <OrdersMain  matchingOrders={matchingOrders} />
      <Footer />
    </>
  )
}

export default Orders
