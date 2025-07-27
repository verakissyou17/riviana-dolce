import Header from "../components/Header";
import TrackingMain from "../components/TrackingMain";
import Footer from "../components/Footer";
import { useProducts } from "../contexts/useProducts";
import { useOrders } from "../contexts/useOrders";
import { useState } from "react";

function Tracking() {
  const { totalQuantity } = useProducts();
  const { matchingOrders } = useOrders();
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");
  return (
    <>
      <Header
        totalQuantity={totalQuantity}
        searchTerm={searchTerm}
        submittedSearch={submittedSearch}
        setSearchTerm={setSearchTerm}
        onSearchSubmit={() => setSubmittedSearch(searchTerm)}
        setSubmittedSearch={setSubmittedSearch}
      />
      <TrackingMain matchingOrders={matchingOrders} />
      <Footer />
    </>
  );
}

export default Tracking;
