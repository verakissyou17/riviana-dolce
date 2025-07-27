import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Tracking from "./pages/Tracking";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/home"
        element={<Home />}
      />
      <Route
        path="/checkout"
        element={<Checkout />}
      />
      <Route
        path="/orders"
        element={<Orders />}
      />
      <Route
        path="/tracking"
        element={<Tracking />}
      />
    </Routes>
  );
}

export default App;
