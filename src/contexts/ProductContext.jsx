import { useEffect, useState } from "react";
import { ProductContext } from "./useProducts";

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [quantities, setQuantities] = useState({});
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [matchingProducts, setMatchingProducts] = useState([]);
  const [selectedDeliveryOptionId, setSelectedDeliveryOptionId] = useState("1");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          new URL(`${import.meta.env.BASE_URL}products.json`, import.meta.url)
        );
        if (!res.ok) throw new Error("Could not fetch products.");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    setTotalQuantity(total);
  }, [cart]);

  useEffect(() => {
    if (!cart.length || !products.length) return;

    const matches = cart
      .map((cartItem) => {
        const product = products.find(
          (product) => product.id === cartItem.productId
        );

        if (!product) return null;

        return {
          ...product,
          quantity: cartItem.quantity,
          deliveryOptionId: cartItem.deliveryOptionId,
        };
      })
      .filter(Boolean);

    setMatchingProducts(matches);
  }, [cart, products]);

  function addToCart(productId, quantity) {
    if (quantity <= 0) return;

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.productId === productId);
      if (existing) {
        return prevCart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { productId, quantity, deliveryOptionId: "1" }];
      }
    });
  }

  function updateCartItemQuantity(productId, newQuantity) {
    setCart((prevCart) => {
      if (newQuantity <= 0) {
        return prevCart.filter((item) => item.productId !== productId);
      }

      return prevCart.map((item) =>
        item.productId === productId ? { ...item, quantity: newQuantity } : item
      );
    });
  }

  function handleSelectedOptionId(newId) {
    setSelectedDeliveryOptionId(newId);
    const updatedCart = cart.map((item) => ({
      ...item,
      deliveryOptionId: newId,
    }));
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        cart,
        setCart,
        addToCart,
        quantities,
        setQuantities,
        totalQuantity,
        matchingProducts,
        updateCartItemQuantity,
        selectedDeliveryOptionId,
        handleSelectedOptionId,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
