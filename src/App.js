import { Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
// Components
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Details />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
