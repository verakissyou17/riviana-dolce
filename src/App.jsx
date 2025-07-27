import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<h1>hello from react</h1>}
      />
      <Route
        path="/home"
        element={<h1>hello from react</h1>}
      />
    </Routes>
  );
}

export default App;
