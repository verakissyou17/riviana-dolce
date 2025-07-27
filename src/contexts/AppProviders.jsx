// src/contexts/AppProviders.jsx
import { ProductProvider } from "./ProductContext";
import { OrdersProvider } from "./OrdersContext";

export function AppProviders({ children }) {
  return (
    <ProductProvider>
      <OrdersProvider>
        {children}
      </OrdersProvider>
    </ProductProvider>
  );
}
