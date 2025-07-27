import Header from "../components/Header";
import OrdersMain from "../components/OrdersMain";
import Footer from "../components/Footer";
import { useProducts } from "../contexts/useProducts";
import { useOrders } from "../contexts/useOrders";
import { useState } from "react";

function Orders() {
  const { totalQuantity } = useProducts();
  const { matchingOrders } = useOrders();
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");

  return (
    <>
      <Header
        totalQuantity={totalQuantity}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        submittedSearch={submittedSearch}
        onSearchSubmit={() => setSubmittedSearch(searchTerm)}
        setSubmittedSearch={setSubmittedSearch}
      />
      <OrdersMain matchingOrders={matchingOrders} />
      <Footer />
    </>
  );
}

export default Orders;
