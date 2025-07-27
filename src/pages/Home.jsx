import Header from "../components/Header";
import HomeMain from "../components/HomeMain";
import Footer from "../components/Footer";
import { useProducts } from "../contexts/useProducts";
import FeaturedProduct from "../components/PageBanner";
import { useState } from "react";

function Home() {
  const {
    products,
    cart,
    addToCart,
    quantities,
    setQuantities,
    totalQuantity,
  } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");
  
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(submittedSearch.toLowerCase())
  );

  return (
    <>
      <FeaturedProduct />
      <Header
        totalQuantity={totalQuantity}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearchSubmit={() => setSubmittedSearch(searchTerm)}
      />
      <HomeMain
        products={filteredProducts}
        quantities={quantities}
        setQuantities={setQuantities}
        cart={cart}
        addToCart={addToCart}
      />
      <Footer />
    </>
  );
}

export default Home;
