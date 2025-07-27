import { useState, useEffect } from "react";
import { OrdersContext } from "./useOrders";
import { useProducts } from "./useProducts";

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState(() => {
    const stored = localStorage.getItem("orders");
    return stored ? JSON.parse(stored) : [];
  });
  const [matchingOrders, setMatchingOrders] = useState([]);

  const { products } = useProducts();

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    if (!orders.length || !products.length) return;
    const matches = orders.map((order) => {
      const matchingItems = order.products
        .map((item) => {
          const product = products.find((p) => p.id === item.productId);
          return product
            ? {
                ...product,
                quantity: item.quantity,
                estimatedDeliveryTime: item.estimatedDeliveryTime, 
              }
            : null;
        })
        .filter(Boolean);

      return {
        ...order,
        items: matchingItems,
      };
    });
    setMatchingOrders(matches);
  }, [orders, products]);

  const addOrder = (newOrder) => {
    setOrders((prevOrders) => {
      const updated = [newOrder, ...prevOrders].slice(0, 3);
      return updated;
    });
  };

  return (
    <OrdersContext.Provider
      value={{
        orders,
        addOrder,
        matchingOrders,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}
