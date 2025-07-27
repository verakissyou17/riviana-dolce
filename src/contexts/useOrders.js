import { createContext, useContext } from "react";

export const OrdersContext = createContext();

export function useOrders() {
  return useContext(OrdersContext);
}